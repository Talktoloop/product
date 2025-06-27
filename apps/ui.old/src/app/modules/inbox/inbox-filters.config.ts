import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';

import { FilterType, IFilterV2 } from '@shared/components/filters-section-v2/filter.model';

import { CheckboxFilterData } from '@shared/components/filters-section-v2/filters-controls-data.model';

import { AutocompleteType } from '@shared/components/filters-section-v2/filters.config';

import * as moment from 'moment/moment';

export enum InboxFilters {
  LANGUAGE = 'language',
  COUNTRY = 'country',
  CHANNEL = 'channel',
  STATUS = 'status',
  DATE = 'date',
  LENGTH = 'length',
  SENSITIVE = 'isSensitive',
  SEARCH_TEXT = 'inboxSearchText',
}

export const ChannelFilters: { id: number; name: string }[] = [
  { id: 1, name: CHANNEL_CONSTANTS.WEB },
  { id: 2, name: CHANNEL_CONSTANTS.SMS },
  { id: 3, name: CHANNEL_CONSTANTS.MESSENGER },
  { id: 4, name: CHANNEL_CONSTANTS.WHATSAPP },
  { id: 5, name: CHANNEL_CONSTANTS.TELEGRAM },
  { id: 6, name: CHANNEL_CONSTANTS.IVRR },
];

export const SensitiveFilters: { id: number; name: string }[] = [
  { id: 1, name: 'Sensitive' },
  { id: 0, name: 'Non-sensitive' }
]

export const inboxFiltersConfig: IFilterV2<InboxFilters>[] = [
  {
    // --------------------- SEARCH TEXT -------------------
    translationKey: 'filtersV2.searchText.label',
    falseValueTranslationKey: 'filtersV2.searchText.label',
    internalName: InboxFilters.SEARCH_TEXT,
    filterFormConfig: { inboxSearchText: new UntypedFormControl(false) },
    type: FilterType.SEARCH_TEXT,
    sessionStorageKey: 'inboxSearchText',
  },
  {
    // --------------------- SENSITIVE -------------------
    translationKey: 'inbox.filters.labels.sensitivity',
    internalName: InboxFilters.SENSITIVE,
    filterFormConfig: { isSensitive: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX_SINGLE,
    sessionStorageKey: 'isSensitive',
    mapValueToStorage: (value: boolean | null, _: CheckboxFilterData) => {
      return value ? value.toString() : null;
    },
    mapValueFromStorage: (key, value: string | number | null, _) => {
      return value === null || value === undefined
        ? { isSensitive: null }
        : { isSensitive: Boolean(value) };
    },
    mapValue: (data: boolean | null) => {
      return data;
    },
  },
  {
    // --------------------- LANGUAGE ---------------------
    translationKey: 'inbox.filters.labels.language',
    internalName: InboxFilters.LANGUAGE,
    filterFormConfig: { language: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'inboxLanguage',
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
    mapValue: (data: { id: number; name: string }[]) => data.map((singleData) => singleData.id),
  },
  {
    // --------------------- COUNTRY ---------------------
    translationKey: 'inbox.filters.labels.country',
    internalName: InboxFilters.COUNTRY,
    filterFormConfig: { country: new UntypedFormControl(null) },
    type: FilterType.AUTOCOMPLETE,
    autocompleteType: AutocompleteType.COUNTRY,
    singleValueTitlePrefix: 'country_name.',
    sessionStorageKey: 'inboxCountry',
  },
  {
    // --------------------- CHANNEL ---------------------
    translationKey: 'inbox.filters.labels.channel',
    internalName: InboxFilters.CHANNEL,
    filterFormConfig: { channel: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'inboxChannel',
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
  {
    // --------------------- STATUS ---------------------
    translationKey: 'inbox.table.status',
    internalName: InboxFilters.STATUS,
    filterFormConfig: { status: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    mapValueToStorage: (statusIndexes: number[], data: CheckboxFilterData) =>
      JSON.stringify(
        (statusIndexes || []).map((statusIndex) => ({
          id: statusIndex,
          name: data.data.find((statusData) => statusData.id === statusIndex.toString())?.name,
        })),
      ),
    mapValueFromStorage: (key, value: { id: number; name: string }[], mapToFormData) => ({
      status: value?.map((singleValue) => (mapToFormData ? singleValue.id : singleValue.name)),
    }),
    mapValue: (data: { id: number; name: string }[]) => data.map((singleData) => singleData.name),
    noSingleValueTitle: true,
    sessionStorageKey: 'inboxStatus',
    countValueAsOne: true,
  },
  {
    // --------------------- DATE ---------------------
    translationKey: 'filtersV2.date.label',
    internalName: InboxFilters.DATE,
    filterFormConfig: {
      date: new UntypedFormGroup({
        from: new UntypedFormControl(null),
        to: new UntypedFormControl(null),
      }),
    },
    type: FilterType.CALENDAR,
    data: null,
    mapValue: ({ from, to }: { from: string; to: string }) => ({
      from: from ? moment(from).startOf('day').utc(true).format() : undefined,
      to: to ? moment(to).endOf('day').utc(true).format() : undefined,
      date: undefined,
    }),
    noSingleValueTitle: true,
    sessionStorageKey: 'inboxDate',
    countValueAsOne: true,
  },
  {
    // --------------------- VOICE DURATION ---------------------
    translationKey: 'filtersV2.voiceDuration.label',
    internalName: InboxFilters.LENGTH,
    filterFormConfig: {
      length: new UntypedFormControl(null),
    },
    type: FilterType.LENGTH,
    mapValue: ({ min, max }: { min: number; max: number }) => {
      return {
        ...(min >= 0 && { durationMin: `${min}` }),
        ...(max >= 0 && { durationMax: `${max}` }),
        length: undefined,
      };
    },
    noSingleValueTitle: true,
    sessionStorageKey: 'inboxLength',
    countValueAsOne: true,
    maxLength: 3600,
  },
];
