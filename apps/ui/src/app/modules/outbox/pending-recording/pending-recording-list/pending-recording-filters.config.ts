import { UntypedFormControl } from '@angular/forms';
import { OutboxPendingFilters } from '@app/modules/outbox/outbox-filter/outbox-filter.model';
import { FilterType, IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { CheckboxFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';
import { AutocompleteType } from '@shared/components/filters-section-v2/filters.config';

export const pendingRecordingFiltersConfig: IFilterV2<OutboxPendingFilters>[] = [
  {
    // --------------------- SEARCH TEXT ---------------------
    translationKey: 'filtersV2.searchText.label',
    internalName: OutboxPendingFilters.SEARCH_TEXT,
    filterFormConfig: { outboxSearchText: new UntypedFormControl(null) },
    type: FilterType.SEARCH_TEXT,
    sessionStorageKey: 'outboxSearchText',
    mapValue: (data: string) => data
  },
  {
    // --------------------- LANGUAGE ---------------------
    translationKey: 'inbox.filters.labels.targetLanguage',
    internalName: OutboxPendingFilters.TARGET_LANGUAGE,
    filterFormConfig: { language: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'targetLanguage',
    mapValueToStorage: (languagesIds: number[], data: CheckboxFilterData) =>
      JSON.stringify(
        (languagesIds || []).map((languageId) => ({
          id: languageId,
          name: data.data.find((languageData) => languageData.id === languageId.toString())?.name,
        })),
      ),
    mapValueFromStorage: (key, value: { id: number; name: string }[], mapToFormData) => ({
      language: value?.map((singleValue) => (mapToFormData ? singleValue.id : singleValue.name)),
    }),
    mapValue: (data: { id: number; name: string }[]) => data.map((singleData) =>singleData.id),
  },
  {
    // --------------------- COUNTRY ---------------------
    translationKey: 'inbox.filters.labels.country',
    internalName: OutboxPendingFilters.COUNTRY,
    filterFormConfig: { country: new UntypedFormControl(null) },
    type: FilterType.AUTOCOMPLETE,
    autocompleteType: AutocompleteType.COUNTRY,
    singleValueTitlePrefix: 'country_name.',
    sessionStorageKey: 'country',
  },
  {
    // --------------------- CHANNEL ---------------------
    translationKey: 'inbox.filters.labels.channel',
    internalName: OutboxPendingFilters.CHANNEL,
    filterFormConfig: { channel: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'channel',
    mapValueToStorage: (channelIds: number[], data: CheckboxFilterData) =>
      JSON.stringify(
        (channelIds || []).map((channelId) => ({
          id: channelId,
          name: data.data.find((channelData) => channelData.id === channelId.toString())?.name,
        })),
      ),
    mapValueFromStorage: (key, value: { id: number; name: string }[], mapToFormData) => ({
      channel: value?.map((singleValue) => (mapToFormData ? singleValue.id : singleValue.name)),
    }),
    mapValue: (data: { id: number; name: string }[]) => data.map((singleData) => singleData.id),
  },
];
