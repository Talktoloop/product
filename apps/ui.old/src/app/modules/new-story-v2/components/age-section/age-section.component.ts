import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { AGE_MAPPING_EXTENDED, AGE_VALUE_EXTENDED } from '@shared/types/age.type';
import { ModalServiceV2 } from '../../../../core/services/modal/modal-v2.service';
import { AgeModalComponent } from '../../modals/age-modal/age-modal.component';

@Component({
  selector: 'loop-age-section',
  templateUrl: './age-section.component.html',
  styleUrls: ['./age-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgeSectionComponent {
  @Input() form: UntypedFormGroup;

  agesAvailable = Object.values(AGE_VALUE_EXTENDED);
  ageMapping = AGE_MAPPING_EXTENDED;

  constructor(private modalService: ModalServiceV2) {}

  onModalOpen(): void {
    this.modalService.open(AgeModalComponent);
  }
}
