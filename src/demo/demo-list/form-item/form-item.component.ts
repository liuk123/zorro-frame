import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormBase } from '../../../app/core/model/form-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.less'],
})
export class FormItemComponent implements OnInit {

  @Input() question: FormBase<string>;
  
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }

}
