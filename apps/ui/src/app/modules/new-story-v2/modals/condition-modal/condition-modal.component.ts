import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-condition-modal',
  templateUrl: './condition-modal.component.html',
  styleUrls: ['./condition-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionModalComponent extends ModalBase {}
