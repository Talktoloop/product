import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryModalComponent extends ModalBase {}
