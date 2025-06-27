import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actions-footer',
  templateUrl: './actions-footer.component.html',
  styleUrls: ['./actions-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsFooterComponent {
  @Input() saveButtonLabel: string;
  @Input() cancelButtonLabel: string;
  @Input() performingSaveAction = false;
  @Input() performingCancelAction = false;
  @Input() disableSaveAction = false;
  @Input() showSaveAction = true;
  @Input() showStepControls = true;
  @Input() step: number;
  @Input() totalSteps: number;
  @Input() disableButtons: boolean;
  @Input() noNextIcon: boolean;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Output() previousStepClick = new EventEmitter<void>();
  @Output() nextStepClick = new EventEmitter<void>();
  @Output() stepChanged = new EventEmitter<void>();

  get checkPublishButtonDisabled(): boolean {
    return (
      this.performingSaveAction ||
      this.performingCancelAction ||
      this.disableSaveAction ||
      this.disableButtons ||
      this.step !== this.totalSteps
    );
  }

  handleCancelClick(): void {
    this.cancel.emit();
  }

  handleSaveClick(): void {
    this.save.emit();
  }

  handlePreviousStepClick(): void {
    this.stepChanged.emit();
    this.previousStepClick.emit();
  }

  handleNextStepClick(): void {
    this.stepChanged.emit();
    this.nextStepClick.emit();
  }
}
