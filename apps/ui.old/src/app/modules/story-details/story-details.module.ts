import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { ArrowPreviousIconModule } from '@app/shared/icons/arrow-previous-icon/arrow-previous-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { AdditionalStoryInfoModule } from '@shared/components/additional-story-info/additional-story-info.module';
import { CommentListModule } from '@shared/components/comment/comment-list/comment-list.module';
import { PillsModule } from '@shared/components/pills/pills.module';
import { PostActionsModule } from '@shared/components/post/partials/post-actions/post-actions.module';
import { ReplyFormModule } from '@shared/components/post/partials/reply-form/reply-form.module';
import { PostPreviewModule } from '@shared/components/post/post-preview/post-preview.module';
import { StoryWithCommentsModule } from '@shared/components/story-with-comments/story-with-comments.module';
import { StoryDetailsRoutingModule } from './story-details-routing.module';
import { StoryDetailsComponent } from './story-details.component';

@NgModule({
  declarations: [StoryDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PostPreviewModule,
    PostActionsModule,
    ReplyFormModule,
    CommentListModule,
    TranslateModule,
    PillsModule,
    StoryWithCommentsModule,
    AdditionalStoryInfoModule,
    ArrowPreviousIconModule,
    ButtonModule,
  ],
  exports: [StoryDetailsRoutingModule, StoryDetailsComponent],
})
export class StoryDetailsModule {}
