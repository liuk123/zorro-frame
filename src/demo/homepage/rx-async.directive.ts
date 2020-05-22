import { HttpErrorResponse } from '@angular/common/http'
import { OnInit, OnDestroy, Input, TemplateRef, ViewContainerRef, ViewRef, Directive} from '@angular/core'
import { Observable, Subject, combineLatest, Subscription } from 'rxjs'
import { startWith, takeUntil, withLatestFrom, retry, finalize,  } from 'rxjs/operators'
import { ObservableInput } from './observable-input.directive'

type Callback<T extends any[] = never, R = void> = (...params: T) => R
export type Nullable<T> = T | null | undefined
export interface AsyncDirectiveContext<T, E> {
  todo: T
  loading: boolean
  error: Nullable<E>
  reload: Callback
}

@Directive({
    selector: '[rxAsync]',
  })
  export class AsyncDirective<T, P, E = HttpErrorResponse>
    implements OnInit, OnDestroy {

    @ObservableInput()
    @Input('rxAsyncContext')
    private context$!: Observable<any> // 自定义 fetcher 调用时的 this 上下文，还可以通过箭头函数、fetcher.bind(this) 等方式解决
  
    @ObservableInput()
    @Input('rxAsyncFetcher')
    private fetcher$!: Observable<Callback<[P], Observable<T>>> // 自动发起请求的回调函数，参数是下面的 params，应该返回 Observable
  
    @ObservableInput()
    @Input('rxAsyncParams')
    private params$!: Observable<P> // fetcher 调用时传入的参数
  
    @Input('rxAsyncRefetch')
    private refetch$$ = new Subject<void>() // 支持用户在指令外部重新发起请求，用户可能不需要，所以设置一个默认值
  
    @ObservableInput()
    @Input('rxAsyncRetryTimes')
    private retryTimes$!: Observable<number> // 发送 Error 时自动重试的次数，默认不重试
  
    private destroy$$ = new Subject<void>()
    private reload$$ = new Subject<void>()
  
    private context = {
      reload: this.reload.bind(this), // 将 reload 绑定到 template 上下文中，方便用户在指令内重新发起请求
    } as AsyncDirectiveContext<T, E>
  
    private viewRef: Nullable<ViewRef>
    private sub: Nullable<Subscription>
  
    constructor(
      private templateRef: TemplateRef<any>,
      private viewContainerRef: ViewContainerRef,
    ) {
    }
  
    reload() {
      this.reload$$.next()
    }
  
    ngOnInit() {
      // 得益于 ObservableInput ，我们可以一次性响应所有参数的变化
      combineLatest([
        this.context$,
        this.fetcher$,
        this.params$,
        this.refetch$$.pipe(startWith(null)), // 需要 startWith(null) 触发第一次请求
        this.reload$$.pipe(startWith(null)), // 同上
      ])
        .pipe(
          takeUntil(this.destroy$$),
          withLatestFrom(this.retryTimes$), // 忽略 retryTimes 的变更，我们只需要取得它的最新值即可
        )
        .subscribe(([[context, fetcher, params], retryTimes]) => {
          // 如果参数变化且上次请求还没有完成时，自动取消请求忽略掉
          this.disposeSub()
  
          // 每次发起请求前都重置 loading 和 error 的状态
          Object.assign(this.context, {
            loading: true,
            error: null,
          })
  
          this.sub = fetcher
            .call(context, params)
            .pipe(
              retry(retryTimes), // 错误时重试
              finalize(() => {
                // 无论是成功还是失败，都取消 loading，并重新触发渲染
                this.context.loading = false
                if (this.viewRef) {
                  this.viewRef.detectChanges()
                }
              }),
            )
            .subscribe(
              data => (this.context.todo = data),
              error => (this.context.error = error),
            )
  
          if (this.viewRef) {
            return this.viewRef.markForCheck()
          }
  
          this.viewRef = this.viewContainerRef.createEmbeddedView(
            this.templateRef,
            this.context,
          )
        })
    }
  
    ngOnDestroy() {
      this.disposeSub()
  
      this.destroy$$.next()
      this.destroy$$.complete()
  
      if (this.viewRef) {
        this.viewRef.destroy()
        this.viewRef = null
      }
    }
  
    disposeSub() {
      if (this.sub) {
        this.sub.unsubscribe()
        this.sub = null
      }
    }
  }