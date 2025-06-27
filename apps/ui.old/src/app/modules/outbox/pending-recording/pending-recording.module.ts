import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedStoryDetailsModule } from '@app/modules/inbox/stories/story-details/shared/shared-story-details.module';
import { SharedModule } from '@app/shared/shared.module';
import { FilterSectionV2Module } from '@shared/components/filters-section-v2/filter-section-v2.module';
import { SharedOutboxModule } from '../shared/shared.module';
import { PendingRecordingListComponent } from './pending-recording-list/pending-recording-list.component';
import { PendingRecordingRoutingModule } from './pending-recording-routing.module';

@NgModule({
  declarations: [PendingRecordingListComponent],
  imports: [CommonModule, SharedOutboxModule, SharedModule, PendingRecordingRoutingModule, FilterSectionV2Module, SharedStoryDetailsModule],
})
export class PendingRecordingModule {}
