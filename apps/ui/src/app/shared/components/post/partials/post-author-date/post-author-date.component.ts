import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { IStory } from '@core/services/api/model/story.model';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { PostDetailsHelperService } from '@shared/components/post/post-details-helper.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-author-date',
  templateUrl: './post-author-date.component.html',
  styleUrls: ['./post-author-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostAuthorDateComponent implements OnChanges {
  @Input() postData: IStory;
  @Input() showFeedbackTags = true;
  byCurrentUser;
  language = this.userLanguageService.getLanguage();
  TagSize = TagSize;


  get userName$(): Observable<string> {
    return this.postDetailsHelper.getAuthorUsername$(this.postData);
  }

  get place(): string {
    return this.postDetailsHelper.getPlace(this.postData);
  }

  constructor(
    private profileService: ProfileService,
    private cd: ChangeDetectorRef,
    private postDetailsHelper: PostDetailsHelperService,
    private userLanguageService: UserLanguageService,
    private translateService: TranslateService,
  ) { }

  ngOnChanges(): void {
    this.byCurrentUser =
      !!this.profileService.userProfile &&
      this.postData?.user?.hasOwnProperty('nickname') &&
      this.postData?.user?.nickname === this.profileService.userProfile?.nickname;
    this.cd.detectChanges();
  }

  getDateFromNow(): string {
    const tranlations: any = {};
    let date: Date;

    tranlations.relativeTime = {
      s: this.translateService.instant(`language.relativeTime.s`),
      ss: this.translateService.instant(`language.relativeTime.ss`),
      m: this.translateService.instant(`language.relativeTime.m`),
      mm: this.translateService.instant(`language.relativeTime.mm`, { value: '%d' }),
      h: this.translateService.instant(`language.relativeTime.h`),
      hh: this.translateService.instant(`language.relativeTime.hh`, { value: '%d' }),
      d: this.translateService.instant(`language.relativeTime.d`),
      dd: this.translateService.instant(`language.relativeTime.dd`, { value: '%d' }),
      M: this.translateService.instant(`language.relativeTime.M`),
      MM: this.translateService.instant(`language.relativeTime.MM`, { value: '%d' }),
      y: this.translateService.instant(`language.relativeTime.y`),
      yy: this.translateService.instant(`language.relativeTime.yy`, { value: '%d' }),
    };

    tranlations.monthsShort = [
      this.translateService.instant(`language.monthsShort.January`),
      this.translateService.instant(`language.monthsShort.February`),
      this.translateService.instant(`language.monthsShort.March`),
      this.translateService.instant(`language.monthsShort.April`),
      this.translateService.instant(`language.monthsShort.May`),
      this.translateService.instant(`language.monthsShort.June`),
      this.translateService.instant(`language.monthsShort.July`),
      this.translateService.instant(`language.monthsShort.August`),
      this.translateService.instant(`language.monthsShort.September`),
      this.translateService.instant(`language.monthsShort.October`),
      this.translateService.instant(`language.monthsShort.November`),
      this.translateService.instant(`language.monthsShort.December`),
    ];



    if (this.postData?.createdAt) {
      date = new Date(this.postData?.createdAt);
    } else {
      date = new Date(this.postData?.publishedAt);
    }

    moment.locale(this.language, tranlations);

    // It is because momentJs show 'a day ago' - d format after 21 hours
    if (this.checkTime(date) < 22) {
      return moment(date).fromNow(true);
    } else {
      return moment(date).format('MMM D, YYYY');
    }
  }

  private checkTime(date: Date): number {
    const currentTime = moment();
    const timeStore = moment(date);

    return currentTime.diff(timeStore, 'h');
  }
}
