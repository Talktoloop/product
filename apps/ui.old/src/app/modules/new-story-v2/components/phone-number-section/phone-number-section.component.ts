import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PhoneModalComponent } from '@app/modules/new-story-v2/modals/phone-modal/phone-modal.component';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';

@Component({
  selector: 'loop-phone-number-section',
  templateUrl: './phone-number-section.component.html',
  styleUrls: ['./phone-number-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberSectionComponent {
  @Input() control: UntypedFormControl;
  @Input() isSensitive: boolean;

  constructor(private modalService: ModalServiceV2) {}

  get phoneInfoTextCode(): string {
    return this.isSensitive ? 'newStoryV2.form.phoneNumber.sensitiveInfo' : 'newStoryV2.form.phoneNumber.info';
  }

  onModalOpen(): void {
    this.modalService.open(PhoneModalComponent);
  }
}
