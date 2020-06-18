import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormBase } from '../../../app/core/model/form-base';
import { InputControlService } from '../../../app/core/services/form-base.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less'],
  providers: [InputControlService]
})
export class FormGroupComponent implements OnInit {

  @Input('value') questions:FormBase<any>[] = [];
  @Output() submitEmit = new EventEmitter();

  validateForm!: FormGroup;
  
  constructor(private ics: InputControlService) { }

  ngOnInit(): void {
    this.validateForm = this.ics.toFormGroup(this.questions)
  }

  submitForm(): void {
    this.validateForm.markAllAsTouched();
    this.validateForm.updateValueAndValidity();
    console.log(this.validateForm.value)
    this.submitEmit.emit();
  }

  resetForm(): void {
    this.validateForm.reset();
  }

}
