import { HttpParams } from '@angular/common/http';
import { ChannelFilters, InboxFilters } from '@app/modules/inbox/inbox-filters.config';
import { ISupportedLanguage } from '@core/services/api/meta-data/model/supported-language.model';
import { IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { FiltersService } from '@core/services/filters/filters.service';
import { SupportedLanguagesService } from '@core/services/locales/supported-languages.service';
import { IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import {
  CheckboxFilterData,
  CheckboxListFilterData,
  CheckboxTabsFilterData,
} from '@shared/components/filters-section-v2/filters-controls-data.model';
import { openStoriesFiltersConfig, StoriesFilters } from '@shared/components/filters-section-v2/filters.config';
import { STORY_STATUS } from '@shared/enums/story-status.enum';
import { checkIfHasValue } from '@shared/utils/object.utils';
import { cloneDeep, merge } from 'lodash';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';

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
                {
                  data: filtersData.minority,
                  translationKey: 'filtersV2.minority.label',
                  controlName: 'minority',
                },
              ] as CheckboxTabsFilterData,
            };
          case StoriesFilters.THEMATIC:
            return { ...singleConfig, data: { data: filtersData.thematic } as CheckboxListFilterData };
          case StoriesFilters.ORGANISATION:
            return { ...singleConfig, data: filtersData.organisations };
          case StoriesFilters.REPLIED_TO:
            return {
              ...singleConfig,
              data: { data: filtersData.repliedTo, titleKey: 'filtersV2.repliedTo.label' } as CheckboxFilterData,
            };
          case StoriesFilters.CHANNEL_FILTER:
            return {
              ...singleConfig,
              data: { data: filtersData.channelFilter, titleKey: 'filtersV2.channelFilter.label' } as CheckboxFilterData,
            };
          case StoriesFilters.PRESET:
            return {
              ...singleConfig,
              data: { data: filtersData.presetFilters, titleKey: 'filtersV2.preset.label' } as CheckboxFilterData,
            };
          default:
            return singleConfig;
        }
      }),
    );
  });
}

export const mapToBackendModel = (config: IFilterV2<any>[], formData: any): any => {
  if (!formData) {
    return {};
  }
  config.forEach((singleConfig: IFilterV2<any>) => {
    if (singleConfig.mapValue && formData[singleConfig.internalName]) {
      formData = { ...formData, ...singleConfig.mapValue(formData[singleConfig.internalName]) };
    }
  });

  delete formData['region'];
  return formData;
};

export const normalizeURLParams = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  let updated = false;

  params.forEach((value, key) => {
    if (key === "date" || key === "storySearchText") return;
    const newValue = value.startsWith("[") && value.endsWith("]") ? value : `[${value}]`;

    if (newValue !== value) {
      params.set(key, newValue);
      sessionStorage.setItem(key, newValue);
      updated = true;
    }
  });

  updated && window.history.replaceState({}, "", `${url.origin}${url.pathname}?${params.toString()}`);
};


export const prepareFilterDataFromSessionStorage = (config: IFilterV2<any>[]): object => {
  const filtersObjectFromSessionStorage = config.reduce((prev, singleConfig) => {
    if (Array.isArray(singleConfig.sessionStorageKey)) {
      return {
        ...prev,
        ...singleConfig.sessionStorageKey.reduce(
          (prev, key) => merge(prev, singleConfig.mapValueFromStorage(key, JSON.parse(sessionStorage.getItem(key)), false)),
          {},
        ),
      };
    } else {
      const value = JSON.parse(sessionStorage.getItem(singleConfig.sessionStorageKey));
      if (singleConfig.mapValueFromStorage) {
        return { ...prev, ...(singleConfig.mapValueFromStorage?.(singleConfig.sessionStorageKey, value, false) || value) };
      }
      if (singleConfig.internalName.includes('SearchText') === true) {
        //manually replace searchtext key
        return { ...prev, searchTerm: value };
      }
      if (singleConfig.internalName === InboxFilters.SENSITIVE) {
        return { ...prev, isSensitive: value };
      }
      return { ...prev, [singleConfig.internalName]: value };
    }
  }, {});
  const mappedData = mapToBackendModel(config, filtersObjectFromSessionStorage);
  return Object.keys(mappedData).reduce((prev, next) => {
    return checkIfHasValue(mappedData[next]) || mappedData[next] === false
      ? { ...prev, [next]: mappedData[next] }
      : prev;
  }, {});
};

export function reverseMapping(mapping: object): object {
  return Object.entries(mapping).reduce(
    (prev, next) => ({
      ...prev,
      [next[1]]: next[0],
    }),
    {},
  );
}

export function prepareChannelFilterOptions(): IBaseEntityDN[] {
  return ChannelFilters.map(({ id, name }) => ({
    id: `${id}`,
    checked: false,
    code: `filtersV2.channel.${name}`,
    name: name,
    content: '',
  }));
}

export function prepareLanguageFilterOptions(languageService: SupportedLanguagesService): Observable<IBaseEntityDN[]> {
  return languageService.getSupportedLanguages().pipe(
    take(1),
    map((languages) => languages.sort((a, b) => a.language.localeCompare(b.language))),
    map((languages: ISupportedLanguage[]) => {
      const languageList = [];

      for (const language of languages) {
        languageList.push({
          code: `languages.${language.language}`,
          id: `${language.id}`,
          checked: false,
          name: language.language,
          content: '',
        } as IBaseEntityDN);
      }

      return languageList;
    }),
  );
}

export function addFilterParamsToHttpParams(params: HttpParams, filters: any): HttpParams {
  if (filters) {
    (Object.keys(filters) || []).forEach((element) => {
      if (filters[element]?.length || typeof filters[element] === 'boolean') {
        params = params.set(element, filters[element]);
      }
    });
  }
  return params;
}

export function prepareStoryStatusFilterOptions(): IBaseEntityDN[] {
  return [
    STORY_STATUS.NOT_STARTED,
    STORY_STATUS.PENDING_TRANSLATION,
    STORY_STATUS.PENDING_TRANSCRIPTION,
    STORY_STATUS.PENDING_PUBLICATION,
    STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP,
    STORY_STATUS.RETURNED_FOR_EDITING,
  ].map((status, index) => ({
    id: `${index}`,
    checked: false,
    code: `story.status.${status}`,
    name: status,
    content: '',
  }));
}
