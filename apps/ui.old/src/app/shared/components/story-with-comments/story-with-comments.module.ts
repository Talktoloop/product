import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommentListModule } from '@shared/components/comment/comment-list/comment-list.module';
import { PillsModule } from '@shared/components/pills/pills.module';
import { PostActionsModule } from '@shared/components/post/partials/post-actions/post-actions.module';
import { ReplyFormModule } from '@shared/components/post/partials/reply-form/reply-form.module';
import { PostPreviewModule } from '@shared/components/post/post-preview/post-preview.module';
import { StoryCardModule } from '@shared/components/story-card/story-card.module';
import { AdditionalStoryInfoModule } from '../additional-story-info/additional-story-info.module';
import { StoryDetailsSubheadingComponent } from './story-details-subheading/story-details-subheading.component';
import { StoryWithCommentsComponent } from './story-with-comments.component';

@NgModule({
  declarations: [StoryWithCommentsComponent, StoryDetailsSubheadingComponent],
  exports: [StoryWithCommentsComponent],
  imports: [
    CommonModule,
    PostActionsModule,
    ReplyFormModule,
    CommentListModule,
    TranslateModule,
    PostPreviewModule,
    PillsModule,
    StoryCardModule,
    AdditionalStoryInfoModule,
  ],
})
export class StoryWithCommentsModule {}
