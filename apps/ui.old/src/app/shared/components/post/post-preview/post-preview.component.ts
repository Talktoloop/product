import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, Output } from '@angular/core';
import { MAIN_ROUTES, STORY_ROUTES } from '@app/app-routing.props';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityCheck } from '@app/core/services/api/model/response/base-entity.model';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { HomeService } from '@app/modules/home/home.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { IStoryTranslation } from '@core/services/api/model/story-translation';
import { IStory } from '@core/services/api/model/story.model';
import { UserLanguageService } from '@core/services/locales/user-language.service';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPreviewComponent extends BaseComponent implements OnChanges {
  public readonly visibleTagsLimit = 2;
  public isWebShareSupported: boolean;
  @Input() readonly postContentLimit = 200;
  @Input() postData: IStory = null;
  @Input() showActions = true;
  @Input() selfLinkClickable = true;
  @Input() categories = [];
  @Input() index = 0;
  @Input() highlightItem = true;
  @Output() storyRemoved$ = new Subject<string>();
  @Output() postPreviewClicked$? = new Subject<string>();
  content = '';
  public selectedContentLang = this.userLangService.getLanguage();
  selfLink = '';
  TagSize = TagSize;

  getStoryContent(): string {
    const translation = this.postData?.translations?.find((t: IStoryTranslation) => t.code === this.selectedContentLang);
    return translation?.content || this.postData?.content || '';
  }
  constructor(
    private translateService: TranslateService,
    private homeService: HomeService,
    private cd: ChangeDetectorRef,
    private userLangService: UserLanguageService,
    public profileService: ProfileService,
    private metaDataService: MetaDataService
  ) {
    super();
    this.isWebShareSupported = 'share' in navigator && typeof navigator.share === 'function';
  }

  get thematicAreas(): Observable<string> {
    return this.metaDataService.thematicAreas$.pipe(
      map((thematicOptions) => {
        const ids = this.postData?.thematics || [];
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

  get storyChannel(): string {
    if (this.postData?.channel) {
      return this.translateService.instant('filtersV2.channel.' + this.postData?.channel);
    } else {
      return '-';
    }
  }

  ngOnChanges(): void {
    if (this.postData && !this.initialized) {
      this.content = this.getStoryContent();
      this.selfLink = this.selfLinkClickable
        ? `/${MAIN_ROUTES.STORY}/${STORY_ROUTES.DETAILS}`.replace(':id', this.postData.id)
        : 'javascript:void(0)';
      this.initialized = true;
      this.cd.detectChanges();
    }
  }

  selfLinkClicked($event): void {
    this.homeService.lastStoryOpened$.next({ storyId: this.postData.id, index: this.index });
    this.postPreviewClicked$.next(this.postData.id);
    if (!this.selfLinkClickable) {
      $event.preventDefault();
      $event.stopPropagation();
    }
  }

  handlePostLanguageChange($event: IStoryTranslation): void {
    this.selectedContentLang = $event.code;
    this.content = this.getStoryContent();
    this.cd.detectChanges();
  }
}
