import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Menu, BreadcrumbMenu } from 'src/app/core/model/menu.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { objectUtil } from 'prime-jsutils';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

  menu: Menu[];
  breadcrumbMenu: BreadcrumbMenu[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    menuSrv: MenuService,
  ) {
    menuSrv.routerEvent.pipe(takeUntil(this.unsubscribe$)).subscribe(v => {
      this.breadcrumbMenu = v;
      this.menu = this.setMenuOpen(menuSrv.menu, this.breadcrumbMenu);
    });
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openEvent(ev){
    this.menu.forEach(v=>{
      v.open = v.route == ev;
    })
  }

  setMenuOpen(menu,breadcrumbMenu){
    if(objectUtil.isObject(menu) && menu.type == 'sub'){
      if(breadcrumbMenu.map(v=>{if(v.route) return v.route}).includes(menu.route.slice(menu.route.lastIndexOf('/')))){
        menu.open = true;
      }else{
        menu.open = false;
      }
      if(menu.children){
        this.setMenuOpen(menu.children, breadcrumbMenu);
      }
    }else if(objectUtil.isArray(menu)){
      menu.forEach(v=>{
        this.setMenuOpen(v, breadcrumbMenu);
      })
    }
    return menu;
  }
}
