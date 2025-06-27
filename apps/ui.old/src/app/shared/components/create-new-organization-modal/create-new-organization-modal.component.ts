import { Component, Inject } from '@angular/core';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-new-organization-modal',
  templateUrl: './create-new-organization-modal.component.html',
  styleUrls: ['./create-new-organization-modal.component.scss'],
})
export class CreateNewOrganizationModalComponent extends ModalBase {
  constructor(@Inject('close$') close$: Subject<void>, @Inject('organizationName') public organizationName: string) {
    super(close$);
  }

  onOrganizationAdded(event) {
    this.close$.next(event);
  }

  onCanceled() {
    this.close$.next(null);
  }
}
