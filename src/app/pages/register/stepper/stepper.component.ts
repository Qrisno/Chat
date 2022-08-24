import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() steps: any;
  @Output() stepChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStepChange(step: { validity: boolean; id: number }) {
    if (step.validity) {
      this.stepChange.emit(step.id);
    }
  }
}
