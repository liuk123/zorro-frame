import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu, BreadcrumbMenu } from 'src/app/core/model/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Input() menu: Menu[];
  @Output() openEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void { }

  open(url:string){
    window.open(url,'_blank');
  }

  openHandler(route: string){
    this.openEvent.emit(route);
  }
}
