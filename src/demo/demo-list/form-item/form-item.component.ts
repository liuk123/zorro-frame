import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBase } from '../../../app/core/model/form-base';
import { FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>FormItemComponent),
      multi:true//令牌多对一
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=>FormItemComponent),
      multi:true//令牌多对一
    }
  ]
})
export class FormItemComponent implements OnInit {

  @Input() question: FormBase<string>;
  
  // @Input() form: FormGroup;
  // get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }

}
