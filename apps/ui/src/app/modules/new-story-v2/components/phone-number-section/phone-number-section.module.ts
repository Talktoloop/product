import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { PhonePickerModule } from '@shared/components/phone-picker/phone-picker.module';
import { LockIconModule } from '@shared/icons/lock-icon/lock-icon.module';
import { InfoLinkModule } from '../../../../shared/components/info-link/info-link.module';
import { PhoneNumberSectionComponent } from './phone-number-section.component';
import { PillsModule } from "@shared/components/pills/pills.module";

@NgModule({
  declarations: [PhoneNumberSectionComponent],
  exports: [PhoneNumberSectionComponent],
  imports: [CommonModule, PhonePickerModule, ReactiveFormsModule, TranslateModule, LockIconModule, InfoLinkModule, CyModule, PillsModule],
})
export class PhoneNumberSectionModule {}
