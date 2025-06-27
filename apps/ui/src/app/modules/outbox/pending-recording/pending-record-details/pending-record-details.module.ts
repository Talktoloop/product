import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedStoryDetailsModule } from '@app/modules/inbox/stories/story-details/shared/shared-story-details.module';
import { DetailsContainerModule } from '@app/modules/outbox/shared/details-container/details-container.module';
import { TranslateModule } from '@ngx-translate/core';
import { AudioPlayerModule } from '@shared/components/audio-player/audio-player.module';
import { AudioRecorderModule } from '@shared/components/audio-recorder/audio-recorder.module';
import { ButtonModule } from '@shared/components/button/button.module';
import { ModalV2Module } from '@shared/components/modal-v2/modal-v2.module';
import { TextareaV2Module } from '@shared/components/textarea-v2/textarea-v2.module';
import { TooltipDirectiveModule } from '@shared/directives/tooltip/tooltip.directive.module';
import { ArrowNextIconModule } from '@shared/icons/arrow-next-icon/arrow-next-icon.module';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { MenuIconModule } from '@shared/icons/menu-icon/menu-icon.module';
import { TagsModule } from '@shared/loop-design-system/components/tags/tags.module';
import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';
import { PendingRecordDetailsRoutingModule } from './pending-record-details-routing.module';
import { PendingRecordDetailsComponent } from './pending-record-details.component';
import { RerecordModalComponent } from './rerecord-modal/rerecord-modal.component';
import { ShortStoryInformationComponent } from './short-story-information/short-story-information.component';

@NgModule({
  declarations: [PendingRecordDetailsComponent, ShortStoryInformationComponent, RerecordModalComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TranslateModule,
    TextareaV2Module,
    AudioPlayerModule,
    AudioRecorderModule,
    ArrowNextIconModule,
    ReactiveFormsModule,
    ExpandMoreIconModule,
    TooltipDirectiveModule,
    DetailsContainerModule,
    LoopDesignSystemModule,
    SharedStoryDetailsModule,
    PendingRecordDetailsRoutingModule,
    MenuIconModule,
    TagsModule,
    ModalV2Module,
  ],
})
export class PendingRecordDetailsModule {}
