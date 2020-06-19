import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-drag',
  templateUrl: './drop-drag.component.html',
  styleUrls: ['./drop-drag.component.less']
})
export class DropDragComponent implements OnInit {

  data1="123"
  data2="456"
  constructor() { }

  ngOnInit(): void {
  }

  handleMove($event,data){
    console.log($event)
    console.log(data)
  }

}
