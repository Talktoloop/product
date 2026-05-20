import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { IBaseEntityCheck } from '@core/services/api/model/response/base-entity.model';
import { IStory } from '@core/services/api/model/story.model';
import { TranslateService } from '@ngx-translate/core';
import { GENDER_MAPPING } from '@shared/types';
import { DIFFICULTY_TRANSLATE_MAPPING } from '@shared/types/difficulty.type';
import { StoryCategory, StoryCategoryMapping } from '@shared/types/story-category.type';
import { Observable, combineLatest, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { AGE_MAPPING_EXTENDED } from "@shared/types/age.type";
import { MINORITY_TRANSLATE_MAPPING } from "@shared/types/minority.type";

@Component({
  selector: 'app-additional-story-info',
  templateUrl: './additional-story-info.component.html',
  styleUrls: ['./additional-story-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalStoryInfoComponent implements OnChanges, OnInit {
  @Input() story: IStory;
  @Input() flat: boolean;
  @Input() noPadding: boolean;
  readonly placeholderValue = '-';
  readonly OTHER_DISABILITY_ID = 7;
  vulnerabilityFactorsText$: Observable<string>;

  constructor(
    private translateService: TranslateService,
    private metaDataService: MetaDataService,
    private cdr: ChangeDetectorRef
  ) {
    this.vulnerabilityFactorsText$ = of(this.placeholderValue);
    this.metaDataService.getVulnerabilityFactors().subscribe();
  }

  ngOnInit(): void {
    this.updateVulnerabilityFactorsObservable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.story) {
      this.updateVulnerabilityFactorsObservable();
    }
  }

  private updateVulnerabilityFactorsObservable(): void {
    const storyIds = this.story?.vulnerabilityFactors || [];

    this.vulnerabilityFactorsText$ = combineLatest([
      this.metaDataService.vulnerabilityFactors$.pipe(startWith([])),
      of(storyIds)
    ]).pipe(
      map(([vulnerabilityFactorsOptions, ids]) => {
        if (!ids?.length || !vulnerabilityFactorsOptions?.length) {
          return this.placeholderValue;
        }
        const idsAsStrings = ids.map(id => String(id));
        const matched = vulnerabilityFactorsOptions
          .filter((option) => idsAsStrings.includes(String(option.id)))
          .map((option) => this.translateService.instant(option.code));
        return matched.length > 0 ? matched.join(', ') : this.placeholderValue;
      }),
      tap(() => this.cdr.markForCheck())
    );
  }

  get storyTypes(): { name: string; category: StoryCategory }[] {
    if (this.story?.isSensitive) {
      return [{ name: `category.sensitive`, category: StoryCategory.SENSITIVE }];
    }

    return this.story?.categories?.map((cat) => ({ name: `category.${cat.code}`, category: StoryCategoryMapping[cat.id] }));
  }

  get storyAge(): string {
    const age = AGE_MAPPING_EXTENDED[this.story?.age];
    return age ?? this.placeholderValue;
  }

  get storyGender(): string {
    const gender = GENDER_MAPPING[this.story?.gender];
    return gender ?? this.placeholderValue;
  }

  get disabilities(): string {
    const disabilities = this.story?.difficulties?.map((difficulty) =>
      Number(difficulty.id) === this.OTHER_DISABILITY_ID && this.story.disabilitiesOtherExplanation?.trim()
        ? this.story.disabilitiesOtherExplanation.trim()
        : this.translateService.instant(DIFFICULTY_TRANSLATE_MAPPING[difficulty.id])
    );
    return disabilities?.length ? disabilities.join(', ') : this.placeholderValue;
  }

  get isMinorityGroup(): string {
    if (this.story?.isMinority === undefined || this.story?.isMinority === null) {
      return this.placeholderValue;
    }
    const minorityValue = this.story.isMinority ? 1 : 0;
    return MINORITY_TRANSLATE_MAPPING[minorityValue] ?? this.placeholderValue;
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
