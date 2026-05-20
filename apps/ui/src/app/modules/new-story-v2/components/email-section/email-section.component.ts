import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ModalServiceV2 } from '../../../../core/services/modal/modal-v2.service';
import { EmailModalComponent } from '../../modals/email-modal/email-modal.component';

@Component({
  selector: 'loop-email-section',
  templateUrl: './email-section.component.html',
  styleUrls: ['./email-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSectionComponent {
  @Input() form: UntypedFormGroup;
  @Input() isSensitive: boolean;

  constructor(private modalService: ModalServiceV2) {}

  onModalOpen(): void {
    this.modalService.open(EmailModalComponent);
  }
}
