import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteStepperComponent } from './route-stepper.component';

@NgModule({
  declarations: [RouteStepperComponent],
  exports: [RouteStepperComponent],
  imports: [CommonModule, RouterModule],
})
export class RouteStepperModule {}
