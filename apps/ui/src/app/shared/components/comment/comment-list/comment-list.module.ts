import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineLoadingModule } from '../../inline-loading/inline-loading.module';
import { SingleCommentModule } from '../single-comment/single-comment.module';
import { CommentListComponent } from './comment-list.component';

@NgModule({
  declarations: [CommentListComponent],
  imports: [CommonModule, InlineLoadingModule, SingleCommentModule],
  exports: [CommentListComponent],
})
export class CommentListModule {}
