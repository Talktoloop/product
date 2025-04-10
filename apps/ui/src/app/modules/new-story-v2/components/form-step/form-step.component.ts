import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loop-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormStepComponent {}
