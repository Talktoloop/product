import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';
import { IStory } from '@core/services/api/model/story.model';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-post-case-manager-date-flat',
  templateUrl: './post-case-manager-date-flat.component.html',
  styleUrls: ['./post-case-manager-date-flat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCaseManagerDateFlatComponent {
  @Input() post: Partial<IStory>;
  language = this.userLanguageService.getLanguage();

  constructor(private translateService: TranslateService, private userLanguageService: UserLanguageService) {}

  getDateFromNow(): string {
    const tranlations: any = {};
    let date: Date;

    if (this.post?.caseManagerReturnedAt) {
      date = new Date(this.post?.caseManagerReturnedAt);
    } else {
      return '-';
    }

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
