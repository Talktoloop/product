import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostAuthorDateFlatModule } from '@shared/components/post/partials/post-author-date-flat/post-author-date-flat.module';
import { PostPreviewModule } from '../post/post-preview/post-preview.module';
import { SkeletonTextModule } from '../skeleton-text/skeleton-text.module';
import { StoryCardComponent } from './story-card.component';

@NgModule({
  declarations: [StoryCardComponent],
  imports: [CommonModule, PostAuthorDateFlatModule, SkeletonTextModule, PostPreviewModule],
  exports: [StoryCardComponent],
})
export class StoryCardModule {}
