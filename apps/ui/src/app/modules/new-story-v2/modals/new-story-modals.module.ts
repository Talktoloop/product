import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../../../shared/components/button/button.module';
import { ModalV2Module } from '../../../shared/components/modal-v2/modal-v2.module';
import { CyModule } from '../../../shared/directives/cy/cy.module';
import { CheckmarkRoundIconModule } from '../../../shared/icons/checkmark-round-icon/checkmark-round-icon.module';
import { DualCalendarModule } from './../../../shared/components/dual-calendar/dual-calendar.module';
import { AgeModalComponent } from './age-modal/age-modal.component';
import { ConditionHelpMeModalComponent } from './condition-help-me-modal/condition-help-me-modal.component';
import { ConditionModalComponent } from './condition-modal/condition-modal.component';
import { CountryModalComponent } from './country-modal/country-modal.component';
import { EmailModalComponent } from './email-modal/email-modal.component';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { NameModalComponent } from './name-modal/name-modal.component';
import { OrganisationsModalComponent } from './organisations-modal/organisations-modal.component';
import { PhoneModalComponent } from './phone-modal/phone-modal.component';
import { PhoneNumberModalComponent } from './phone-number-modal/phone-number-modal.component';
import { SensitiveStoryModalComponent } from './sensitive-story-modal/sensitive-story-modal.component';
import { ShareExperienceModalComponent } from './share-experience-modal/share-experience-modal.component';
import { StoryTypeModalComponent } from './story-type-modal/story-type-modal.component';
import { WhatHappenNextModalComponent } from './what-happen-next-modal/what-happen-next-modal.component';
import { WhatNextModalComponent } from './what-next-modal/what-next-modal.component';

@NgModule({
  declarations: [
    AgeModalComponent,
    ConditionHelpMeModalComponent,
    ConditionModalComponent,
    CountryModalComponent,
    EmailModalComponent,
    LocationModalComponent,
    NameModalComponent,
    OrganisationsModalComponent,
    PhoneModalComponent,
    PhoneNumberModalComponent,
    SensitiveStoryModalComponent,
    ShareExperienceModalComponent,
    StoryTypeModalComponent,
    WhatHappenNextModalComponent,
    WhatNextModalComponent,
  ],
  imports: [CommonModule, TranslateModule, ModalV2Module, ButtonModule, CheckmarkRoundIconModule, DualCalendarModule, CyModule],
  exports: [
    AgeModalComponent,
    ConditionHelpMeModalComponent,
    ConditionModalComponent,
    CountryModalComponent,
    EmailModalComponent,
    LocationModalComponent,
    NameModalComponent,
    OrganisationsModalComponent,
    PhoneNumberModalComponent,
    SensitiveStoryModalComponent,
    ShareExperienceModalComponent,
    StoryTypeModalComponent,
    WhatHappenNextModalComponent,
    WhatNextModalComponent,
  ],
})
export class NewStoryModalsModule {}
