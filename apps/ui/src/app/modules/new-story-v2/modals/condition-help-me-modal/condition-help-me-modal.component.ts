import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-condition-help-me-modal',
  templateUrl: './condition-help-me-modal.component.html',
  styleUrls: ['./condition-help-me-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionHelpMeModalComponent extends ModalBase {}
