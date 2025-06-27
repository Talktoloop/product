import { Component } from '@angular/core';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IBaseEntityCheck } from '@app/core/services/api/model/response/base-entity.model';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { GENDER_MAPPING } from '@app/shared/types';
import { DIFFICULTY_TRANSLATE_MAPPING } from '@app/shared/types/difficulty.type';
import { IOrganisation } from '@core/services/api/model/story.model';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { StoryCategory } from '@shared/types/story-category.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoryDetailsService } from '../../story-details.service';
import { URGENT_MAPPING } from "@shared/types/isurgent-type";
import { AGE_MAPPING_EXTENDED } from "@shared/types/age.type";
import { MINORITY_TRANSLATE_MAPPING } from "@shared/types/minority.type"

@Component({
  selector: 'app-story-information',
  templateUrl: './story-information.component.html',
  styleUrls: ['./story-information.component.scss'],
})
export class StoryInformationComponent extends BaseComponent {
  TagSize = TagSize;
  StoryCategory = StoryCategory;

  private readonly placeholderValue = '-';

  constructor(
    public storyDetailsService: StoryDetailsService,
    private translateService: TranslateService,
    private metaDataService: MetaDataService,
  ) {
    super();
  }

  get storyAge(): string {
    return AGE_MAPPING_EXTENDED[this.storyDetailsService.story?.age] ?? this.placeholderValue;
  }

  get storyGender(): string {
    return GENDER_MAPPING[this.storyDetailsService.story?.gender] ?? this.placeholderValue;
  }

  get storyUrgent(): string {
    const urgentValue = this.storyDetailsService.story?.isUrgent ? 1 : 0;
    return URGENT_MAPPING[urgentValue] ?? this.placeholderValue;
  }

  get disabilities(): string {
    const disabilities = this.storyDetailsService.story?.difficulties.map((difficulty) =>
      this.translateService.instant(DIFFICULTY_TRANSLATE_MAPPING[difficulty.id]),
    );
    return disabilities?.length ? disabilities.join(', ') : this.placeholderValue;
  }

  get isMinorityGroup(): string {
    const minorityValue = this.storyDetailsService.story?.isMinority ? 1 : 0;
    return MINORITY_TRANSLATE_MAPPING[minorityValue] ?? this.placeholderValue;
  }

  get storyChannel(): string {
    if (this.storyDetailsService.story?.channel) {
      return this.translateService.instant('filtersV2.channel.' + this.storyDetailsService.story?.channel);
    } else {
      return '-';
    }
  }

  get place(): string {
    const countryName = this.translateService.instant(`country_name.${this.storyDetailsService.story.country}`);
    return `${this.storyDetailsService.story.place}, ${countryName}`;
  }

  get thematicAreas(): Observable<string> {
    return this.metaDataService.thematicAreas$.pipe(
      map((thematicOptions) => {
        const ids = this.storyDetailsService.story?.thematics || [];
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

  onOrganisationRemove(organization: IOrganisation): void {
    const foundOrganizationIndex = this.storyDetailsService.story.organisations.findIndex(
      (singleOrganization) => singleOrganization.id === organization.id,
    );
    foundOrganizationIndex >= 0 && this.storyDetailsService.story.organisations.splice(foundOrganizationIndex, 1);
  }
}
