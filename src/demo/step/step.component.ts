import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.less']
})
export class StepComponent implements OnInit {

  index = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onIndexChange(event: number): void {
    this.index = event;
  }
}
