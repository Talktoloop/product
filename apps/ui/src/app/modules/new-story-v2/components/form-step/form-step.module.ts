import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormStepComponent } from './form-step.component';

@NgModule({
  declarations: [FormStepComponent],
  exports: [FormStepComponent],
  imports: [CommonModule],
})
export class FormStepModule {}
