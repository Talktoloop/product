import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-phone-number-modal',
  templateUrl: './phone-number-modal.component.html',
  styleUrls: ['./phone-number-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberModalComponent extends ModalBase {}
