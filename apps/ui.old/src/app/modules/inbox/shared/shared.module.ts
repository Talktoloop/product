import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { ConversationModule } from '@app/modules/admin/components/conversation/conversation.module';
import { AutocompleteModule } from '@app/shared/components/autocomplete/autocomplete.module';
import { CheckboxModule } from '@app/shared/components/checkbox/checkbox.module';
import { CheckboxFilterWrapperGroupedModule } from '@app/shared/components/filters-section-v2/checkbox-filter-wrapper-grouped/checkbox-filter-wrapper-grouped.module';
import { CountryFilterModule } from '@app/shared/components/filters-section-v2/country-filter/country-filter.module';
import { LocationFilterModule } from '@app/shared/components/filters-section-v2/location-filter/location-filter.module';
import { MobileTableModule } from '@app/shared/components/mobile-table/mobile-table.module';
import { NewStoryRadioModule } from '@app/shared/components/new-story-radio/new-story-radio.module';
import { OrganisationModule } from '@app/shared/components/organisation/organisation.module';
import { PillsModule } from '@app/shared/components/pills/pills.module';
import { PostAuthorDateFlatModule } from '@app/shared/components/post/partials/post-author-date-flat/post-author-date-flat.module';
import { PostCaseManagerDateFlatModule } from '@app/shared/components/post/partials/post-case-manager-date-flat/post-case-manager-date-flat.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { SortModule } from '@app/shared/components/sort/sort.module';
import { StepperV2Module } from '@app/shared/components/stepper-v2/stepper-v2.module';
import { StoryTypeIconModule } from '@app/shared/components/story-category-icon/story-type-icon.module';
import { StoryWithCommentsModule } from '@app/shared/components/story-with-comments/story-with-comments.module';
import { ArrowNextIconModule } from '@app/shared/icons/arrow-next-icon/arrow-next-icon.module';
import { ErrorOutlineIconModule } from '@app/shared/icons/error-outline-icon/error-outline-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { InboxOutboxStylerModule } from '@shared/components/inbox-outbox-styler/inbox-outbox-styler.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ActionsFooterModule } from './components/actions-footer/actions-footer.module';
import { ContentTranslationStepModule } from './components/content-translation-step/content-translation-step.module';
import { FormSectionModule } from './components/form-section/form-section.module';
import { LanguageAutocompleteModule } from './components/language-autocomplete/language-autocomplete.module';
import { PostTranslationControllerModule } from './components/post-translation-controller/post-translation-controller.module';
import { InboxRejectModalModule } from './components/reject-modal/reject-modal.module';
import { SendStoryToCaseManagerFormModule } from './components/send-story-to-case-manager-modal/send-story-to-case-manager-form.module';
import { TopBarModule } from './components/top-bar/top-bar.module';
import { AssignModeratorModalModule } from './components/assign-moderator-modal/assign-moderator-modal.module';

@NgModule({
  declarations: [],
  imports: [
    InboxOutboxStylerModule,
    ActionsFooterModule,
    ArrowNextIconModule,
    AutocompleteModule,
    CheckboxFilterWrapperGroupedModule,
    CheckboxModule,
    CommonModule,
    ContentTranslationStepModule,
    ConversationModule,
    CountryFilterModule,
    ErrorOutlineIconModule,
    FormSectionModule,
    FormsModule,
    InboxRejectModalModule,
    InfiniteScrollModule,
    LanguageAutocompleteModule,
    LocationFilterModule,
    MatTableModule,
    MobileTableModule,
    NewStoryRadioModule,
    OrganisationModule,
    PillsModule,
    PostAuthorDateFlatModule,
    PostTranslationControllerModule,
    RadioModule,
    ReactiveFormsModule,
    SendStoryToCaseManagerFormModule,
    SortModule,
    StepperV2Module,
    StoryTypeIconModule,
    StoryWithCommentsModule,
    TopBarModule,
    TranslateModule,
    AssignModeratorModalModule
  ],
  exports: [
    InboxOutboxStylerModule,
    ActionsFooterModule,
    ArrowNextIconModule,
    AutocompleteModule,
    CheckboxFilterWrapperGroupedModule,
    CheckboxModule,
    ContentTranslationStepModule,
    CountryFilterModule,
    ErrorOutlineIconModule,
    FormSectionModule,
    FormsModule,
    InfiniteScrollModule,
    LanguageAutocompleteModule,
    LocationFilterModule,
    MatTableModule,
    MobileTableModule,
    NewStoryRadioModule,
    OrganisationModule,
    PillsModule,
    PostAuthorDateFlatModule,
    PostCaseManagerDateFlatModule,
    PostTranslationControllerModule,
    RadioModule,
    ReactiveFormsModule,
    InboxRejectModalModule,
    SendStoryToCaseManagerFormModule,
    ConversationModule,
    SortModule,
    StepperV2Module,
    StoryTypeIconModule,
    StoryWithCommentsModule,
    TopBarModule,
    TranslateModule,
    AssignModeratorModalModule
  ],
})
export class SharedInboxModule {}
