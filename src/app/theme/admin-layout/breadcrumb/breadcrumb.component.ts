import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbItem } from 'src/app/core/model/menu.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumbMenu: BreadcrumbItem[] = [];
  constructor() {}

  ngOnInit(): void {

  }

}
