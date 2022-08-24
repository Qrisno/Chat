import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { StepperComponent } from './stepper/stepper.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';
import { StepComponent } from './stepper/step/step.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    StepperComponent,
    UserInfoComponent,
    UserVerificationComponent,
    StepComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterModule {}
