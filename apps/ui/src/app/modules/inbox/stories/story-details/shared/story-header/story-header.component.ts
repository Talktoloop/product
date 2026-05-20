import { Component } from '@angular/core';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { SimpleTagTheme } from '@app/shared/loop-design-system/components/tags/simple-tag-theme.enum';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { CountryPipe } from '@app/shared/pipes/country.pipe';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { StoryDetailsService } from '../../story-details.service';

@Component({
  selector: 'app-story-header',
  templateUrl: './story-header.component.html',
  styleUrls: ['./story-header.component.scss'],
})
export class StoryHeaderComponent {
  SimpleTagTheme = SimpleTagTheme;
  TagSize = TagSize;

  private language = this.userLanguageService.getLanguage();

  constructor(
    public ui: UIService,
    public storyDetailsService: StoryDetailsService,
    private translateService: TranslateService,
    private userLanguageService: UserLanguageService,
    private countryPipe: CountryPipe,
  ) { }

  get authorUsername$(): Observable<string> {
    const userName = this.storyDetailsService.story?.authorNickname;
    return userName ? of(userName) : this.translateService.get('global.Annonymous');
  }

  get place(): string {
    return this.storyDetailsService.story?.place
      ? `${this.storyDetailsService.story?.place}, ${this.countryPipe.transform(this.storyDetailsService.story?.country)}`
      : this.countryPipe.transform(this.storyDetailsService.story?.country);
  }

  get region(): number {
    return this.storyDetailsService.story?.regionId;
  }

  get recipients(): { name: string, verified: boolean }[] {
    return (this.storyDetailsService.story.organisations || []).map((org) => ({ name: org.name, verified: org.verified }));
  }

  get dateFromNow(): string {
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

    if (this.storyDetailsService.story?.publishedAt) {
      date = new Date(this.storyDetailsService.story?.publishedAt);
    } else {
      date = new Date(this.storyDetailsService.story?.createdAt);
    }

    moment.locale(this.language, tranlations);

    // It is because momentJs show 'a day ago' - d format after 21 hours
    if (StoryHeaderComponent.checkTime(date) < 22) {
      return moment(date).fromNow(true);
    } else {
      return moment(date).format('L LT');
    }
  }

  private static checkTime(date: Date): number {
    const currentTime = moment();
    const timeStore = moment(date);

    return currentTime.diff(timeStore, 'h');
  }
}
