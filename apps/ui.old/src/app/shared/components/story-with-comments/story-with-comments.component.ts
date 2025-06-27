import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { IStory } from '@core/services/api/model/story.model';
import { StoryService } from '@core/services/api/story/story.service';
import { UIService } from '@core/services/ui/ui.service';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, finalize, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-story-with-comments',
  templateUrl: './story-with-comments.component.html',
  styleUrls: ['./story-with-comments.component.scss'],
})
export class StoryWithCommentsComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() channel: CHANNEL_CONSTANTS;
  @Input() postData: IStory;
  @Input() showReplies = true;
  @Input() showForm = true;
  @Input() showActions = true;
  @Input() embed = false;
  @Input() showReplyForm = true;
  @Input() forceExpanded = false;
  @Input() editableTags = false;
  @Input() forceInfoWithin: boolean;
  @Input() showStoryInfo = true;
  @Input() changeSubject: Observable<boolean>;
  @Output() loadingError = new EventEmitter();
  @Output() dismissedTag = new EventEmitter();
  @Output() totalReplies = new EventEmitter();
  destroyed$ = new Subject();
  storyId: string;
  story$: Observable<IStory>;
  storyLoaded = false;
  commentsLoadedCount = -1;
  organisationsReplied = new Array<string>();
  loading: boolean;
  story: IStory;

  constructor(private storyService: StoryService, private router: Router, private cd: ChangeDetectorRef, public uiService: UIService) {}

  ngOnInit(): void {
    this.storyId = this.id;
    if (this.id) {
      this.load(this.storyId, this.channel);
    }
    if (this.changeSubject) {
      this.changeSubject.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        this.cd.markForCheck();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.postData) {
      this.story$ = of(this.postData);
      this.storyId = this.postData.id;
      this.storyLoaded = true;
      this.cd.markForCheck();
    }
  }

  load(id: string, channel: CHANNEL_CONSTANTS): void {
    if (channel) {
      this.loadStoryAsModerator(id, channel);
    } else {
      this.loadStory(id);
    }
  }

  commentsLoadedEvent(loaded: number): void {
    this.commentsLoadedCount = loaded;
    this.totalReplies.emit(this.commentsLoadedCount);
    this.cd.markForCheck();
  }

  get isInInboxArea(): boolean {
    return this.router.url.startsWith(`/${MAIN_ROUTES.INBOX}/`);
  }

  trackByFunction(i: number): number {
    return i;
  }

  private loadStoryAsModerator(id: string, channel: CHANNEL_CONSTANTS): void {
    this.storyService
      .getStoryModerator(id, channel)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        finalize(() => (this.loading = false)),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        (res) => {
          this.story$ = of(res);
          this.story = res;
          this.organisationsReplied = [];
          res.organisations.forEach((org) => {
            if (org.replied) {
              this.organisationsReplied.push(org.name);
            }
          });
          this.storyLoaded = true;
          this.cd.markForCheck();
        },
        () => {
          this.loadingError.emit(true);
        },
      );
  }
  private loadStory(id: string): void {
    this.storyService
      .getStory(id)
      .pipe(
        take(1),
        catchError((e) => throwError({ error: e })),
        finalize(() => (this.loading = false)),
        takeUntil(this.destroyed$),
      )
      .subscribe(
        (res) => {
          this.story$ = of(res);
          this.story = res;
          this.organisationsReplied = [];
          res.organisations.forEach((org) => {
            if (org.replied) {
              this.organisationsReplied.push(org.name);
            }
          });
          this.storyLoaded = true;
          this.cd.markForCheck();
        },
        () => {
          this.loadingError.emit(true);
        },
      );
  }
}
