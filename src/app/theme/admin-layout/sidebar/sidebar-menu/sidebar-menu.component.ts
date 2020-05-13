import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.less']
})
export class SidebarMenuComponent implements OnInit {

  @Input() menu: Menu[];
  constructor() { }

  ngOnInit(): void {}

  open(url:string){
    window.open(url,'_blank');
  }

}
