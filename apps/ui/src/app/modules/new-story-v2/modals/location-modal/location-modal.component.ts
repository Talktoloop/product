import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationModalComponent extends ModalBase {
  constructor(
    @Inject('close$') close$: Subject<any>,
    @Inject('isSensitive') public isSensitive: boolean,
  ) {
    super(close$);
  }
}
