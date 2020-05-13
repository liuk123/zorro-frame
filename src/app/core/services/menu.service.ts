import { Injectable } from '@angular/core';
import { objectUtil } from 'prime-jsutils';
import { Menu } from '../model/menu.model';

const replaceObj = {
  state:'id',
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _menu: Menu[] = [];

  get menu(){
    return this._menu;
  }

  set menu(v){
    if(!objectUtil.isEmptyObject(replaceObj)){
      this._menu = this.menu.concat(objectUtil.replaceObjKey(v,replaceObj));  
    }else{
      this._menu = this.menu.concat(v);
    }
  }

}
