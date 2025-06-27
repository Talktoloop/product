import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { StepperStepComponent } from '@shared/components/stepper-v2/stepper-step/stepper-step.component';

@Component({
  selector: 'loop-stepper',
  templateUrl: './stepper-v2.component.html',
  styleUrls: ['./stepper-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperV2Component implements AfterViewInit {
  @ContentChildren(StepperStepComponent, { descendants: true }) steps: QueryList<StepperStepComponent>;
  @Input() set activeStepNo(value: number) {
    this.changeStep(value);
    this.cd.detectChanges();
  }
  get activeStepNo(): number {
    return this._activeStepNo;
  }

  @Input() disabledClick: boolean;
  @Input() wizardInvisible: boolean;

  @Output() stepChanged = new EventEmitter<number>();

  _activeStepNo = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.updateActiveStep();
  }

  handleStepClick(index: number): void {
    if (this.disabledClick) {
      return;
    }
    this.changeStep(index);
  }

  private changeStep(index: number): void {
    this._activeStepNo = index;
    this.stepChanged.next(index);
    this.updateActiveStep();
    this.cd.markForCheck();
  }

  private updateActiveStep(): void {
    this.steps?.forEach((step, index) => {
      step.visible = index === this.activeStepNo;
      step.cd.detectChanges();
    });
  }

  isActive(index: number): boolean {
    return index === this.activeStepNo;
  }

  isPreviousStep(index: number): boolean {
    return index < this.activeStepNo;
  }

  isFutureStep(index: number): boolean {
    return index > this.activeStepNo;
  }
}
