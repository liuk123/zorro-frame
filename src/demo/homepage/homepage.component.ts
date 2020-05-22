import { Component, OnInit, Inject, ChangeDetectionStrategy, Input } from '@angular/core';
import { MessageUtilService } from 'prime-zorro'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {

  title="";
  constructor(
    @Inject('CONFIG') private config,
    private messageUtil: MessageUtilService,
    private http: HttpClient
  ) { }

  ngOnInit() {}
  createBasicMessage(): void {
    this.messageUtil.success();
  }


  context = this

  @Input()
  todoId = 1

  @Input()
  retryTimes = 0

  refetch$$ = new Subject<void>()

  fetchTodo(params: string) {
    return typeof params === 'number'
      ? this.http.get('http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-finalize/'+ params)
      : null;
  }

}

