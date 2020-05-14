import { Injectable, EventEmitter } from '@angular/core';
import { objectUtil } from 'prime-jsutils';
import { Menu, BreadcrumbItem } from '../model/menu.model';

const replaceObj = {
  state: 'id',
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private _menu: Menu[] = [];
  get menu() {
    return this._menu;
  }
  set menu(v) {
    if (!objectUtil.isEmptyObject(replaceObj)) {
      this._menu = this.menu.concat(objectUtil.replaceObjKey(v, replaceObj));
    } else {
      this._menu = this.menu.concat(v);
    }
  }

  breadcrumbStr: string;
  breadcrumbMenu: BreadcrumbItem[] = [];
  routerEvent = new EventEmitter();

  setTitle(value) {
    this.breadcrumbStr = value;
    let links = this.breadcrumbStr.slice(1).split('/');
    this.breadcrumbMenu.length = 0;
    this.addBreadcrumb(links, 0, this.menu);
    this.routerEvent.emit(this.breadcrumbMenu);
    console.log(this.breadcrumbMenu)
  }

  addBreadcrumb(links, index, menu) {
    for (let menuItem of menu) {
      if (links[index] == menuItem.route) {

        if (menuItem.type == "router") {
          this.breadcrumbMenu.push({
            title: menuItem.title,
            route: menuItem.route,
          })
        } else if (menuItem.type == "link") {
          this.breadcrumbMenu.push({
            title: menuItem.title,
            link: menuItem.link,
          })
        } else if (menuItem.type == "sub") {
          this.breadcrumbMenu.push({
            title: menuItem.title,
          })
        }
        if (links.length > index && objectUtil.isArray(menuItem.children) && menuItem.children.length > 0) {
          this.addBreadcrumb(links, index + 1, menuItem.children);
        }

      }
    }
  }
}
