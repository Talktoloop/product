import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { StoryService } from '@core/services/api/story/story.service';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { IPostActions } from './model/post-actions.model';

@Component({
  selector: 'app-post-actions',
  templateUrl: './post-actions.component.html',
  styleUrls: ['./post-actions.component.scss'],
})
export class PostActionsComponent implements OnDestroy, OnChanges {
  destroyed$ = new Subject();
  @Input() postData: IPostActions;
  voted = false;
  votes: number;
  voting = false;
  private initialized = false;
  get upvoteLabelKey(): string {
    return this.voted ? 'global.upvoted' : 'global.upvote';
  }

  constructor(private storyService: StoryService, private cd: ChangeDetectorRef) {}

  ngOnChanges(): void {
    if (this.postData && !this.initialized) {
      this.initialized = true;
      this.voted = this.storyService.hasUserVoted(this.postData.id);
      this.votes = this.postData.votes;
    }
  }

  upvote($event): void {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.voting) {
      return;
    }
    this.voting = true;
    if (!this.voted) {
      this.voted = true;
      this.votes++;
      this.storyService
        .voteStory(this.postData.id)
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe(
          (res) => {
            this.voting = false;
            if (!res.success) {
              this.votes--;
            } else {
              this.storyService.setUserVoted(this.postData.id, true);
            }
            this.cd.detectChanges();
          },
          (e) => {
            this.voting = false;
            this.votes--;
            this.voted = false;
            this.cd.detectChanges();
          },
        );
    } else {
      this.voted = false;
      this.votes--;
      this.storyService
        .unvoteStory(this.postData.id)
        .pipe(take(1), takeUntil(this.destroyed$))
        .subscribe(
          (res) => {
            this.voting = false;
            if (!res.success) {
              this.votes++;
              this.voted = true;
            } else {
              this.storyService.setUserVoted(this.postData.id, false);
            }
            this.cd.detectChanges();
          },
          (e) => {
            this.voting = false;
            this.votes++;
            this.voted = true;
            this.cd.detectChanges();
          },
        );
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
