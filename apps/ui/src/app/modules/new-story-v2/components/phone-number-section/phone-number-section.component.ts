import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
  Host,
  SkipSelf,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PhoneModalComponent } from '@app/modules/new-story-v2/modals/phone-modal/phone-modal.component';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { StepperStepComponent } from '@shared/components/stepper-v2/stepper-step/stepper-step.component';

@Component({
  selector: 'loop-phone-number-section',
  templateUrl: './phone-number-section.component.html',
  styleUrls: ['./phone-number-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberSectionComponent implements OnInit, OnChanges {
  @Input() control: UntypedFormControl;
  @Input() isSensitive: boolean;
  dropdownOpen = true;

  constructor(
    private modalService: ModalServiceV2,
    @Optional() @Host() @SkipSelf() public step: StepperStepComponent,
  ) {
  }

  ngOnInit() {
    this.updateDropdownState();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('isSensitive' in changes) {
      this.updateDropdownState();
    }
  }

  updateDropdownState() {
    this.dropdownOpen = !!this.isSensitive;
  }

  toggleDropdown() {
    if (!this.isSensitive) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  get phoneInfoTextCode(): string {
    return this.isSensitive
      ? 'newStoryV2.form.phoneNumber.sensitiveInfo'
      : 'newStoryV2.form.phoneNumber.info';
  }

  onModalOpen(): void {
    this.modalService.open(PhoneModalComponent);
  }
}
