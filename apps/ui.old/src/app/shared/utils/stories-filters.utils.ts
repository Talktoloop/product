import { FiltersService } from '@core/services/filters/filters.service';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { CheckboxFilterData, CheckboxTabsFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';
import { openStoriesFiltersConfig, StoriesFilters } from '@shared/components/filters-section-v2/filters.config';
import { cloneDeep } from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export function prepareStoriesFilterData(
  destroyed$: Subject<void>,
  filtersService: FiltersService,
  filtersConfig$: BehaviorSubject<IFilterV2<StoriesFilters>[]>,
): void {
  filtersService.filtersData$.pipe(take(1), takeUntil(destroyed$)).subscribe((filtersData) => {
    filtersConfig$.next(
      cloneDeep(openStoriesFiltersConfig).map((singleConfig) => {
        switch (singleConfig.internalName) {
          case StoriesFilters.TYPE:
            return {
              ...singleConfig,
              data: { data: filtersData.categories, titleKey: 'filtersV2.storyType.label' } as CheckboxFilterData,
            };
          case StoriesFilters.LOCATION:
            return { ...singleConfig, data: filtersData.countries };
          case StoriesFilters.DEMOGRAPHIC:
            return {
              ...singleConfig,
              data: [
                {
                  data: filtersData.ages,
                  translationKey: 'filtersV2.age.label',
                  controlName: 'age',
                },
                {
                  data: filtersData.genders,
                  translationKey: 'filtersV2.gender.label',
                  controlName: 'gender',
                },
                {
                  data: filtersData.difficulties,
                  translationKey: 'filtersV2.disability.label',
                  controlName: 'difficulty',
                },
              ] as CheckboxTabsFilterData,
            };
          case StoriesFilters.THEMATIC:
            return { ...singleConfig, data: filtersData.thematic };
          case StoriesFilters.ORGANISATION:
            return { ...singleConfig, data: filtersData.organisations };
          default:
            return singleConfig;
        }
      }),
    );
  });
}
