import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ModalServiceV2 } from '../../../../core/services/modal/modal-v2.service';
import { NameModalComponent } from '../../modals/name-modal/name-modal.component';

@Component({
  selector: 'loop-what-is-your-name',
  templateUrl: './what-is-your-name.component.html',
  styleUrls: ['./what-is-your-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIsYourNameComponent {
  @Input() form: UntypedFormGroup;
  @Input() isSensitive: boolean


  constructor(private modalService: ModalServiceV2) {}

  onModalOpen(): void {
    this.modalService.open(NameModalComponent, {
      isSensitive: this.isSensitive
    });
  }
}
