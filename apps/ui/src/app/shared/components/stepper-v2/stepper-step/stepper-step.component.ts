import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'loop-stepper-step',
  templateUrl: './stepper-step.component.html',
  styleUrls: ['./stepper-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperStepComponent {
  @Input() title: string;
  @Input() optional: boolean;
  @Input() invisible: boolean;
  visible: boolean;

  constructor(public cd: ChangeDetectorRef) {}
}
