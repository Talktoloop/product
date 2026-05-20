import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckboxV2Module } from '@app/shared/components/checkbox-v2/checkbox-v2.module';

import { CyModule } from '@app/shared/directives/cy/cy.module';

import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from '@shared/components/button/button.module';

import { CheckboxModule } from '@shared/components/checkbox/checkbox.module';

import { InfoLinkModule } from '@shared/components/info-link/info-link.module';

import { InputModule } from '@shared/components/input/input.module';

import { LocationModule } from '@shared/components/location/location.module';

import { ModalV2Module } from '@shared/components/modal-v2/modal-v2.module';

import { PostPreviewModule } from '@shared/components/post/post-preview/post-preview.module';

import { RadioModule } from '@shared/components/radio/radio.module';

import { StepperNavigationModule } from '@shared/components/stepper-navigation/stepper-navigation.module';

import { NewStoryRadioModule } from '../../../shared/components/new-story-radio/new-story-radio.module';

import { StepperV2Module } from '../../../shared/components/stepper-v2/stepper-v2.module';

import { ArrowNextIconModule } from '../../../shared/icons/arrow-next-icon/arrow-next-icon.module';

import { CheckmarkRoundIconModule } from '../../../shared/icons/checkmark-round-icon/checkmark-round-icon.module';

import { EditPencilIconModule } from '../../../shared/icons/edit-pencil-icon/edit-pencil-icon.module';

import { InfoIconModule } from '../../../shared/icons/info-icon/info-icon.module';

import { LikeIconModule } from '../../../shared/icons/like-icon/like-icon.module';

import { LockIconModule } from '../../../shared/icons/lock-icon/lock-icon.module';

import { VisibilityHiddenIconModule } from '../../../shared/icons/visibility-hidden-icon/visibility-hidden-icon.module';

import { VisibilityIconModule } from '../../../shared/icons/visibility-icon/visibility-icon.module';

import { SharedModule } from '../../../shared/shared.module';

import { AgeSectionComponent } from '../components/age-section/age-section.component';

import { CaseManagerMessageModule } from '../components/case-manager-message/case-manager-message.module';

import { ConditionSectionComponent } from '../components/condition-section/condition-section.component';

import { CountrySectionModule } from '../components/country-section/country-section.module';

import { EmailSectionComponent } from '../components/email-section/email-section.component';

import { FormStepModule } from '../components/form-step/form-step.module';

import { GenderSectionComponent } from '../components/gender-section/gender-section.component';

import { LocationSectionModule } from '../components/location-section/location-section.module';

import { NewStoryInfoComponent } from '../components/new-story-info/new-story-info.component';

import { OrganizationsSectionModule } from '../components/organizations-section/organizations-section.module';

import { OurLoopPromiseModule } from '../components/our-loop-promise/our-loop-promise.module';

import { PhoneNumberSectionModule } from '../components/phone-number-section/phone-number-section.module';

import { SensitiveStoryComponent } from '../components/sensitive-story/sensitive-story.component';

import { ShareContentStateComponent } from '../components/share-content/share-content-state/share-content-state.component';

import { ShareContentComponent } from '../components/share-content/share-content.component';

import { StoryTypeBoxgroupModule } from '../components/story-type-boxgroup/story-type-boxgroup.module';

import { WhatIsYourNameComponent } from '../components/what-is-your-name/what-is-your-name.component';

import { NewStoryModalsModule } from '../modals/new-story-modals.module';

import { TagsModule } from '@app/shared/loop-design-system/components/tags/tags.module';
import { FormComponent } from './form.component';
import { AdditionalContactInformationComponent } from '../components/additional-contact-information/additional-contact-information.component';
import { SensitiveStoryContactConsentComponent } from '../components/sensitive-story-contact-consent/sensitive-story-contact-consent.component';
import { TextareaV2Module } from '@app/shared/components/textarea-v2/textarea-v2.module';
import { QuickExitButtonModule } from '../components/quick-exit-button/quick-escape-button.module';
import { CalloutModule } from '@app/shared/components/callout/callout.component.module';

@NgModule({
  declarations: [
    AgeSectionComponent,
    ConditionSectionComponent,
    EmailSectionComponent,
    FormComponent,
    GenderSectionComponent,
    NewStoryInfoComponent,
    SensitiveStoryComponent,
    ShareContentComponent,
    ShareContentStateComponent,
    WhatIsYourNameComponent,
    AdditionalContactInformationComponent,
    SensitiveStoryContactConsentComponent
  ],
  imports: [
    ArrowNextIconModule,
    ButtonModule,
    CaseManagerMessageModule,
    CheckboxModule,
    CheckboxV2Module,
    CheckmarkRoundIconModule,
    CommonModule,
    CountrySectionModule,
    CyModule,
    EditPencilIconModule,
    FormsModule,
    FormStepModule,
    InfoIconModule,
    InfoLinkModule,
    InputModule,
    LikeIconModule,
    LocationSectionModule,
    LockIconModule,
    ModalV2Module,
    NewStoryModalsModule,
    NewStoryRadioModule,
    OrganizationsSectionModule,
    OrganizationsSectionModule,
    OurLoopPromiseModule,
    PhoneNumberSectionModule,
    PostPreviewModule,
    RadioModule,
    ReactiveFormsModule,
    SharedModule,
    StepperNavigationModule,
    StepperV2Module,
    StoryTypeBoxgroupModule,
    TranslateModule,
    VisibilityHiddenIconModule,
    VisibilityIconModule,
    LocationModule,
    TagsModule,
    TextareaV2Module,
    QuickExitButtonModule,
    CalloutModule
  ],
  exports: [FormComponent],
})
export class FormModule {}
