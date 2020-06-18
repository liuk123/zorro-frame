import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjModel } from "../../app/biz/model/proj.model"
import { FormBase } from '../../app/core/model/form-base';
@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.less']
})
export class DemoListComponent implements OnInit {


  questions:FormBase<any>[] = [
    {
      key: 'projName',
      label: '项目名称',
      value: null,
      valide:[],
      controlType: 'textbox',
      type: 'text',
    },
    {
      key: 'timeRange',
      label: '项目日期',
      value: null,
      valide:[],
      controlType: 'rangePicker',
    },
    {
      key: 'projType',
      label: '项目类型',
      value: null,
      valide:[],
      controlType: 'dropdown',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ]
    },
    {
      key: 'timeRang122e',
      label: '项目日期',
      value: null,
      valide:[],
      controlType: 'rangePicker',
    },
  ]
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  submitEmit(value): void {
    console.log(value)
  }
}
