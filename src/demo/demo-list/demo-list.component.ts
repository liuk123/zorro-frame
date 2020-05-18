import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjModel } from "../../app/biz/model/proj.model"
@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.less']
})
export class DemoListComponent implements OnInit {

  validateForm!: FormGroup;
  isCollapse = true;
  ProjModel = ProjModel;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      projName: [null],
      projCode: [null],
      amount:[null],
      projTime: [null],
      projType: [ProjModel.projTypeDefaultValue],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value)
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  resetForm(): void {
    this.validateForm.reset();
  }

}

let data = {
  label: "项目编号",
  value: "projCode",
  type: "string",
}
