import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DoneIconModule } from '@shared/icons/done-icon/done-icon.module';
import { PillsModule } from '../pills/pills.module';
import { StepperStepComponent } from './stepper-step/stepper-step.component';
import { StepperV2Component } from './stepper-v2.component';

@NgModule({
  declarations: [StepperV2Component, StepperStepComponent],
  exports: [StepperV2Component, StepperStepComponent],
  imports: [CommonModule, DoneIconModule, PillsModule, TranslateModule],
})
export class StepperV2Module {}
