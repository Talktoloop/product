import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-age-modal',
  templateUrl: './age-modal.component.html',
  styleUrls: ['./age-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgeModalComponent extends ModalBase {}
