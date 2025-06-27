import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { IBaseEntityCheck } from '@core/services/api/model/response/base-entity.model';
import { IStory } from '@core/services/api/model/story.model';
import { TranslateService } from '@ngx-translate/core';
import { AGE_MAPPING, GENDER_MAPPING } from '@shared/types';
import { DIFFICULTY_TRANSLATE_MAPPING } from '@shared/types/difficulty.type';
import { StoryCategory, StoryCategoryMapping } from '@shared/types/story-category.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-additional-story-info',
  templateUrl: './additional-story-info.component.html',
  styleUrls: ['./additional-story-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalStoryInfoComponent {
  @Input() story: IStory;
  @Input() flat: boolean;
  @Input() noPadding: boolean;
  readonly placeholderValue = '-';

  constructor(private translateService: TranslateService, private metaDataService: MetaDataService) {}

  get storyTypes(): { name: string; category: StoryCategory }[] {
    if (this.story?.isSensitive) {
      return [{ name: `category.sensitive`, category: StoryCategory.SENSITIVE }];
    }

    return this.story?.categories?.map((cat) => ({ name: `category.${cat.code}`, category: StoryCategoryMapping[cat.id] }));
  }

  get storyAge(): string {
    const age = AGE_MAPPING[this.story?.age];
    return age ?? this.placeholderValue;
  }

  get storyGender(): string {
    const gender = GENDER_MAPPING[this.story?.gender];
    return gender ?? this.placeholderValue;
  }

  get disabilities(): string {
    const disabilities = this.story?.difficulties.map((difficulty) =>
      this.translateService.instant(DIFFICULTY_TRANSLATE_MAPPING[difficulty.id]),
    );
    return disabilities?.length ? disabilities.join(', ') : this.placeholderValue;
  }

  get storyChannel(): string {
    if (this.story?.channel) {
      return this.translateService.instant('filtersV2.channel.' + this.story?.channel);
    } else {
      return '-';
    }
  }

  get thematicAreas(): Observable<string> {
    return this.metaDataService.thematicAreas$.pipe(
      map((thematicOptions) => {
        const ids = this.story?.thematics || [];
        const children = thematicOptions.reduce((acc: IBaseEntityCheck[], area) => [...acc, ...area.children], []);
        return (
          children
            .filter((option) => ids.includes(Number(option.id)))
            .map((option) => this.translateService.instant(option.code))
            .join(', ') || this.placeholderValue
        );
      }),
    );
  }
}
