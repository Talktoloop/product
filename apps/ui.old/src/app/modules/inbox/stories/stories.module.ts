import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoriesService } from '@app/modules/inbox/stories/stories.service';
import { SharedStoryDetailsModule } from '@app/modules/inbox/stories/story-details/shared/shared-story-details.module';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { SelectOptionModule } from '@app/shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@app/shared/components/selectors/select/select.module';
import { SortModule } from '@app/shared/components/sort/sort.module';
import { ExpandMoreIconModule } from '@app/shared/icons/expand-more-icon/expand-more-icon.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AudioPlayerModule } from '@shared/components/audio-player/audio-player.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedInboxModule } from '../shared/shared.module';
import { ItemsPerPageSelectComponent } from './items-per-page-select/items-per-page-select.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from './pagination/pagination.service';
import { SelectionService } from './pagination/selection.service';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoriesRoutingModule } from './stories-routing.module';

@NgModule({
  declarations: [StoriesListComponent, PaginationComponent, ItemsPerPageSelectComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedInboxModule,
    SharedModule,
    SortModule,
    StoriesRoutingModule,
    TranslateModule,
    SharedStoryDetailsModule,
    AudioPlayerModule,
    ButtonModule,
    ExpandMoreIconModule,
    SelectModule,
    SelectOptionModule,
  ],
  providers: [StoriesService, PaginationService, SelectionService],
})
export class StoriesModule {}
