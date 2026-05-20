import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.component.html',
  styleUrls: ['./phone-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneModalComponent extends ModalBase {}
