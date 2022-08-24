import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  steps = [
    {
      id: 1,
      validity: false,
    },
    {
      id: 2,
      validity: false,
    },
  ];

  activeStep: number;

  registerForm: FormGroup = new FormGroup({
    userInfoForm: new FormGroup({
      userName: new FormControl(),
      lastName: new FormControl(),
      password: new FormControl(),
    }),
    userVerificationForm: new FormGroup({
      mobileNum: new FormControl(),
    }),
  });

  get userInfoForm() {
    return this.registerForm.controls['userInfoForm'] as FormGroup;
  }

  get userVerificationForm() {
    return this.registerForm.controls['userVerificationForm'] as FormGroup;
  }

  setActiveStep(stepId: number) {
    this.activeStep = stepId;
  }
  constructor() {}

  ngOnInit(): void {}
}
