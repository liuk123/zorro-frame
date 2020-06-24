import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
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
      valide:[Validators.required],
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
  
  form= this.fb.group({
    username: [null, [this.requiredValidate]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  submitEmit(value): void {
    console.log(value)
  }
  submit(){
    console.log(this.form.value)
    console.log(this.form.valid)
  }

  requiredValidate(control: AbstractControl) {
    control.setValidators((c: FormControl) => {
        if (control.value && control.value.toString().trim() !== '') {
          return null;
        } else {
          return {required: {info: '必填项'}};
        }
      })
  }
}