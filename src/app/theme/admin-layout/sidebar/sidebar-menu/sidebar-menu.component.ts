import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.less']
})
export class SidebarMenuComponent implements OnInit {

  
  menu: Menu[];
  constructor(
    private menuSrv: MenuService,
  ) { }

  ngOnInit(): void {
    this.menu = this.menuSrv.menu;
  }

}
