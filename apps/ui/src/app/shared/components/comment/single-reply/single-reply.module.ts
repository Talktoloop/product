import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostContextMenuModule } from '@app/shared/components/post/partials/post-context-menu/post-context-menu.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { PostAuthorDateFlatModule } from '@shared/components/post/partials/post-author-date-flat/post-author-date-flat.module';
import { StoryCardModule } from '@shared/components/story-card/story-card.module';
import { UpvoteModule } from '@shared/components/upvote/upvote.module';
import { ReplyIconModule } from '@shared/icons/reply-icon/reply-icon.module';
import { CardModule } from '../../card2/card.module';
import { PillsModule } from '../../pills/pills.module';
import { PostAuthorDateModule } from '../../post/partials/post-author-date/post-author-date.module';
import { StoryContentModule } from '../../post/partials/story-content/story-content.module';
import { StoryTranslationsModule } from '../../post/partials/story-translations/story-translations.module';
import { CommentActionsModule } from '../partials/comment-actions/comment-actions.module';
import { SingleReplyComponent } from './single-reply.component';

@NgModule({
  declarations: [SingleReplyComponent],
  imports: [
    CommonModule,
    PostAuthorDateFlatModule,
    ButtonModule,
    TranslateModule,
    UpvoteModule,
    ReplyIconModule,
    StoryCardModule,
    PostAuthorDateModule,
    StoryContentModule,
    StoryTranslationsModule,
    CardModule,
    CommentActionsModule,
    PostContextMenuModule,
    PillsModule,
  ],
  exports: [SingleReplyComponent],
})
export class SingleReplyModule {}
