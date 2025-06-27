import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedStoryDetailsModule } from '@app/modules/inbox/stories/story-details/shared/shared-story-details.module';
import { InProgressRoutingModule } from '@app/modules/outbox/in-progress/in-progress-routing.module';
import { SharedOutboxModule } from '@app/modules/outbox/shared/shared.module';
import { SharedModule } from '@app/shared/shared.module';
import { FilterSectionV2Module } from '@shared/components/filters-section-v2/filter-section-v2.module';
import { DataUtils } from '@shared/utils/data.utils';
import { InProgressListComponent } from './in-progress-list/in-progress-list.component';

@NgModule({
  declarations: [InProgressListComponent],
  imports: [CommonModule, SharedModule, SharedOutboxModule, FilterSectionV2Module, InProgressRoutingModule, SharedStoryDetailsModule],
  providers: [DataUtils],
})
export class InProgressModule {}
