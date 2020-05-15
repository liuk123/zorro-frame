import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu, BreadcrumbMenu } from 'src/app/core/model/menu.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  menu: Menu[];
  breadcrumbMenu: BreadcrumbMenu[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private menuSrv: MenuService,
  ) {
    this.menu = this.menuSrv.menu;
    this.menuSrv.routerEvent.pipe(takeUntil(this.unsubscribe$),).subscribe(v => 
      this.breadcrumbMenu = v);
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  
}
