import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalBase } from '../modal.base';

@Component({
  selector: 'loop-organisations-modal',
  templateUrl: './organisations-modal.component.html',
  styleUrls: ['./organisations-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationsModalComponent extends ModalBase {
  constructor(@Inject('close$') close$: Subject<any>, @Inject('isSensitive') public isSensitive: boolean) {
    super(close$);
  }
}
