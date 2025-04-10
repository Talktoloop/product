import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { CheckboxWrapperModule } from '@app/shared/components/checkbox-wrapper/checkbox-wrapper.module';
import { ModalV2Module } from '@app/shared/components/modal-v2/modal-v2.module';
import { NewStoryRadioModule } from '@app/shared/components/new-story-radio/new-story-radio.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { TextareaV2Module } from '@app/shared/components/textarea-v2/textarea-v2.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxV2Module } from '@shared/components/checkbox-v2/checkbox-v2.module';
import { SkeletonLoaderModule } from '@shared/components/skeleton-loader/skeleton-loader.module';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { InfoIconModule } from '@shared/icons/info-icon/info-icon.module';
import { InboxRejectFormComponent } from './reject-form/reject-form.component';
import { CheckboxFilterWrapperGroupedModule } from "../../../../../shared/components/filters-section-v2/checkbox-filter-wrapper-grouped/checkbox-filter-wrapper-grouped.module";
import { ExpandMoreIconModule } from '@app/shared/icons/expand-more-icon/expand-more-icon.module';

@NgModule({
  declarations: [InboxRejectFormComponent],
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    ModalV2Module,
    ReactiveFormsModule,
    TranslateModule,
    CheckboxWrapperModule,
    NewStoryRadioModule,
    RadioModule,
    TextareaV2Module,
    InfoIconModule,
    CloseIconModule,
    SkeletonLoaderModule,
    CheckboxV2Module,
    CheckboxFilterWrapperGroupedModule,
    ExpandMoreIconModule
  ],
})
export class InboxRejectModalModule { }
