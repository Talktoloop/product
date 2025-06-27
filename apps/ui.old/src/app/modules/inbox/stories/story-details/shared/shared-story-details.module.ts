import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSectionModule } from '@app/modules/inbox/shared/components/form-section/form-section.module';
import { SendStoryToCaseManagerFormModule } from '@app/modules/inbox/shared/components/send-story-to-case-manager-modal/send-story-to-case-manager-form.module';
import { StoryActionButtonsComponent } from '@app/modules/inbox/stories/story-details/shared/story-action-buttons/story-action-buttons.component';
import { AutocompleteModule } from '@app/shared/components/autocomplete/autocomplete.module';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { CheckboxModule } from '@app/shared/components/checkbox/checkbox.module';
import { CheckboxFilterWrapperGroupedModule } from '@app/shared/components/filters-section-v2/checkbox-filter-wrapper-grouped/checkbox-filter-wrapper-grouped.module';
import { CountryFilterModule } from '@app/shared/components/filters-section-v2/country-filter/country-filter.module';
import { LocationFilterModule } from '@app/shared/components/filters-section-v2/location-filter/location-filter.module';
import { InputModule } from '@app/shared/components/input/input.module';
import { LocationModule } from '@app/shared/components/location/location.module';
import { ModalV2Module } from '@app/shared/components/modal-v2/modal-v2.module';
import { NewStoryRadioModule } from '@app/shared/components/new-story-radio/new-story-radio.module';
import { OrganisationModule } from '@app/shared/components/organisation/organisation.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { SelectOptionModule } from '@app/shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@app/shared/components/selectors/select/select.module';
import { SlideToggleModule } from '@app/shared/components/slide-toggle/slide-toggle.module';
import { ArrowNextIconModule } from '@app/shared/icons/arrow-next-icon/arrow-next-icon.module';
import { ArrowPreviousIconModule } from '@app/shared/icons/arrow-previous-icon/arrow-previous-icon.module';
import { SearchIconModule } from '@app/shared/icons/search-icon/search-icon.module';
import { TagsModule } from '@app/shared/loop-design-system/components/tags/tags.module';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { TextareaV2Module } from '@shared/components/textarea-v2/textarea-v2.module';
import { DropdownDirectiveModule } from '@shared/directives/dropdown/dropdown-directive.module';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { DividerComponent } from './divider/divider.component';
import { ReviewHeaderComponent } from './review-header/review-header.component';
import { StoryContentComponent } from './story-content/story-content.component';
import { StoryDetailsTabsComponent } from './story-details-tabs/story-details-tabs.component';
import { StoryHeaderComponent } from './story-header/story-header.component';
import { StoryInformationComponent } from './story-information/story-information.component';
import { StoryReviewActionButtonsComponent } from './story-review-action-buttons/story-review-action-buttons.component';
import { InvitationModalComponent } from './story-review-form/invitation-modal/invitation-modal.component';
import { StoryReviewFormComponent } from './story-review-form/story-review-form.component';
import { StoryTranslateActionButtonsComponent } from './story-translate-action-buttons/story-translate-action-buttons.component';
import { StoryTranslateGlobalComponent } from './story-translate-global/story-translate-global.component';
import { TranslateHeaderComponent } from './translate-header/translate-header.component';
import { StoryAuthorHistoryComponent } from './story-author-history/story-author-history.component';

@NgModule({
  declarations: [
    DividerComponent,
    ReviewHeaderComponent,
    StoryContentComponent,
    StoryDetailsTabsComponent,
    StoryHeaderComponent,
    StoryInformationComponent,
    StoryReviewActionButtonsComponent,
    StoryReviewFormComponent,
    StoryTranslateActionButtonsComponent,
    StoryTranslateGlobalComponent,
    TranslateHeaderComponent,
    StoryActionButtonsComponent,
    InvitationModalComponent,
    StoryAuthorHistoryComponent,
  ],
  exports: [
    DividerComponent,
    ReviewHeaderComponent,
    StoryContentComponent,
    StoryDetailsTabsComponent,
    StoryHeaderComponent,
    StoryInformationComponent,
    StoryReviewActionButtonsComponent,
    StoryReviewFormComponent,
    StoryTranslateActionButtonsComponent,
    StoryTranslateGlobalComponent,
    TranslateHeaderComponent,
    StoryActionButtonsComponent,
    StoryAuthorHistoryComponent
  ],
  imports: [
    AutocompleteModule,
    ButtonModule,
    CheckboxFilterWrapperGroupedModule,
    CheckboxModule,
    CommonModule,
    CountryFilterModule,
    FormSectionModule,
    FormsModule,
    InputModule,
    LocationFilterModule,
    LoopDesignSystemModule,
    NewStoryRadioModule,
    OrganisationModule,
    RadioModule,
    ReactiveFormsModule,
    SendStoryToCaseManagerFormModule,
    SlideToggleModule,
    TagsModule,
    TranslateModule,
    // TO DO think about loop-icon
    ArrowPreviousIconModule,
    ArrowNextIconModule,
    TextareaV2Module,
    LocationModule,
    ModalV2Module,
    SearchIconModule,
    SharedModule,
    ExpandMoreIconModule,
    DropdownDirectiveModule,
    SelectOptionModule,
    SelectModule,
  ],
})
export class SharedStoryDetailsModule { }
