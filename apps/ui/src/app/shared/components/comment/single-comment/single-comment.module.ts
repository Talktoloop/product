import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PostAuthorDateFlatModule } from '@shared/components/post/partials/post-author-date-flat/post-author-date-flat.module';
import { PostAuthorDateModule } from '@shared/components/post/partials/post-author-date/post-author-date.module';
import { ReplyFormModule } from '@shared/components/post/partials/reply-form/reply-form.module';
import { UpvoteModule } from '@shared/components/upvote/upvote.module';
import { SubdirectoryArrowRightIconModule } from '@shared/icons/subdirectory-arrow-right-icon/subdirectory-arrow-right-icon.module';
import { CardModule } from '../../card2/card.module';
import { SingleReplyModule } from '../single-reply/single-reply.module';
import { SingleCommentComponent } from './single-comment.component';

@NgModule({
  declarations: [SingleCommentComponent],
  imports: [
    CommonModule,
    PostAuthorDateModule,
    UpvoteModule,
    ReplyFormModule,
    TranslateModule,
    PostAuthorDateFlatModule,
    SubdirectoryArrowRightIconModule,
    SingleReplyModule,
    CardModule,
  ],
  exports: [SingleCommentComponent],
})
export class SingleCommentModule {}
