import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailModalComponent extends ModalBase {}
