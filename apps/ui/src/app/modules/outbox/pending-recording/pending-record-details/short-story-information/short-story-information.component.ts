import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICategory } from '@core/services/api/model/response/get-categories.model';
import { IStory } from '@core/services/api/model/story.model';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { AGE_MAPPING } from '@shared/types';

@Component({
  selector: 'app-short-story-information',
  templateUrl: './short-story-information.component.html',
  styleUrls: ['./short-story-information.component.scss'],
})
export class ShortStoryInformationComponent implements AfterViewInit {
  @ViewChild('storyDetails') storyDetailsRef: ElementRef<HTMLDivElement>;
  @Input() storyDetails: IStory;
  storyDetailsToShow: { key: string; value: string }[] = [];
  storyCategories: { key: string; value: ICategory[] };

  constructor(private translateService: TranslateService, public ui: UIService) {}

  ngAfterViewInit(): void {
    this.storyCategories = { key: this.getTranslation('story.details.review.info.storyType'), value: this.storyDetails.categories };
    this.storyDetailsToShow = [
      { key: this.getTranslation('global.authorName'), value: this.storyDetails.authorNickname },
      { key: this.getTranslation('global.age'), value: this.getTranslation(`${AGE_MAPPING[this.storyDetails.age]}`) },
      {
        key: this.getTranslation('story.details.review.info.channel'),
        value: this.getTranslation(`filtersV2.channel.${this.storyDetails.channel}`),
      },
      {
        key: this.getTranslation('story.details.review.info.location'),
        value: this.getTranslation(`country_name.${this.storyDetails.country}`),
      },
      {
        key: this.getTranslation('story.details.review.info.originalLanguage'),
        value: this.getTranslation(`languages.${this.storyDetails.language}`),
      },
    ];
  }

  getTranslation(key: string) {
    return this.translateService.instant(key);
  }
}
