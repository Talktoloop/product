import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { COMMENT_STATUS } from '@app/shared/enums/comment-status.enum';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IComment } from '@core/services/api/model/comment.model';
import { BaseComponent } from '@shared/components/base.component';
import { Observable, of } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent extends BaseComponent implements OnChanges, OnDestroy {
  @Input() id: string;
  @Output() loaded = new EventEmitter<number>();
  @Input() showReplyForm = true;
  @Input() forceExpanded = false;
  todayMS = new Date().valueOf();
  comments$: Observable<IComment[]> = new Observable();
  loadedBool = false;

  constructor(private commentService: CommentService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id && changes?.id.previousValue !== this.id) {
      this.loadedBool = false;
      this.comments$ = of([]);
      this.loaded.emit(-1);
      this.commentService
        .getComments(this.id)
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe((res) => {
          res.forEach((item) => {
            item.authorNickname = item.authorNickname || item.user?.nickname;
            item.children?.forEach((child) => {
              child.authorNickname = child.authorNickname || child.user?.nickname;
            });
          });

          this.comments$ = of(res);
          this.loadedBool = true;
          this.loaded.emit(this.calculateCommentsCount(res));
          this.initialized = true;
          this.cd.markForCheck();
        });
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  get commentsLoaded(): boolean {
    return this.loadedBool;
  }

  trackByFunction(i: number, item: IComment): string {
    return item.id;
  }

  private calculateCommentsCount(comments: IComment[]): number {
    return comments.filter((comment) => comment.status !== COMMENT_STATUS.PENDING_REVIEW).reduce((sum, comment) => sum + 1 + (comment.children.filter((subComment)=>subComment.status !== COMMENT_STATUS.PENDING_REVIEW )?.length || 0), 0);
  }
}
