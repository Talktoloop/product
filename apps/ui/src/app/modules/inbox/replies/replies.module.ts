import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepliesService } from '@app/modules/inbox/replies/replies.service';
import { InlineLoadingModule } from '@app/shared/components/inline-loading/inline-loading.module';
import { SkeletonTextModule } from '@app/shared/components/skeleton-text/skeleton-text.module';
import { SharedModule } from '@app/shared/shared.module';
import { SharedInboxModule } from '../shared/shared.module';
import { RepliesListComponent } from './replies-list/replies-list.component';
import { RepliesRoutingModule } from './replies-routing.module';

@NgModule({
  declarations: [RepliesListComponent],
  imports: [CommonModule, InlineLoadingModule, RepliesRoutingModule, SharedInboxModule, SharedModule, SkeletonTextModule],
  providers: [RepliesService],
})
export class RepliesModule {}
