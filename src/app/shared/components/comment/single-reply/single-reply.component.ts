import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityCheck } from '@app/core/services/api/model/response/base-entity.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { COMMENT_STATUS } from '@app/shared/enums/comment-status.enum';
import { IComment } from '@core/services/api/model/comment.model';
import { IStoryTranslation } from '@core/services/api/model/story-translation';
import { UserLanguageService } from '@core/services/locales/user-language.service';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-single-reply',
  templateUrl: './single-reply.component.html',
  styleUrls: ['./single-reply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleReplyComponent implements OnInit {
  @Input() comment: IComment;
  @Input() isReplyEnable = true;
  @Input() isUpVoteEnable = true;
  @Input() isReplyFormShown: boolean;
  @Input() showReply: boolean;
  @Input() voted: boolean;
  @Input() votes: number;
  @Output() reply = new EventEmitter<string>();
  @Output() upvote = new EventEmitter<string>();

  COMMENT_STATUS = COMMENT_STATUS;

  selectedContentLang: string;

  get commentContent(): string {
    if (this.selectedContentLang === this.userLanguageService.getLanguage()) {
      return this.comment.content;
    }
    return this.comment.translations.find((translation) => translation.code === this.selectedContentLang)?.content;
  }

  constructor(private cd: ChangeDetectorRef,
    private userLanguageService: UserLanguageService,
    public profileService: ProfileService,
    private metaDataService: MetaDataService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.selectedContentLang = this.userLanguageService.getLanguage();
  }

  handleReplyClick(): void {
    this.reply.emit(this.comment.id);
  }

  handleUpvoteClick(): void {
    this.upvote.emit(this.comment.id);
  }

  handleCommentLanguageChange($event: IStoryTranslation): void {
    this.selectedContentLang = $event.code;
    this.cd.markForCheck();
  }

  get thematicAreas(): Observable<string> {
    return this.metaDataService.thematicAreas$.pipe(
      map((thematicOptions) => {
        const ids = this.comment?.thematics || [];
        const children = thematicOptions.reduce((acc: IBaseEntityCheck[], area) => [...acc, ...area.children], []);
        return (
          children
            .filter((option) => ids.includes(Number(option.id)))
            .map((option) => this.translateService.instant(option.code))
            .join(', ')
        );
      }),
    );
  }
}
