import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-name-modal',
  templateUrl: './name-modal.component.html',
  styleUrls: ['./name-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameModalComponent extends ModalBase {
  constructor(
    @Inject('close$') close$: Subject<any>,
    @Inject('isSensitive') public isSensitive: boolean,
  ) {
    super(close$);
  }
}
