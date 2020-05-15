import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbMenu } from 'src/app/core/model/menu.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumbMenu: BreadcrumbMenu[] = [];
  constructor() { }

  ngOnInit(): void {
    // this.breadcrumbMenu = [
    //   { 
    //     "title": "模版", 
    //     "children": [
    //       { "title": "首页", "route": "/demo/homepage" }, 
    //       { "title": "上传", "route": "/demo/upload" },
    //       { 
    //         "title": "模版2", 
    //         "children": [
    //           { "title": "首页2", "route": "/demo/homepage" }, 
    //           { "title": "上传2", "route": "/demo/upload" },
    //           { 
    //             "title": "模版3", 
    //             "children": [
    //               { "title": "首页3", "route": "/demo/homepage" }, 
    //               { "title": "上传3", "route": "/demo/upload" }
    //             ] 
    //           }, 
    //         ] 
    //       }, 
    //     ] 
    //   }, 
    //   { "title": "上传", "route": "/demo/upload" }]
  }

}
