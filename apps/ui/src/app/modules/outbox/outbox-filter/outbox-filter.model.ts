import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';

export interface IFilter {
  translationKey: string;
  filterName: FiltersNames;
}

export enum FiltersNames {
  TARGET_LANGUAGE = 0,
  COUNTRY = 1,
  CHANNEL = 2,
  SEARCH_TEXT = 3
}

export enum OutboxPendingFilters {
  TARGET_LANGUAGE = 'language',
  COUNTRY = 'country',
  CHANNEL = 'channel',
  SEARCH_TEXT = 'outboxSearchText'
}

export const FiltersNamesMapping = {
  0: 'targetLanguage',
  1: 'country',
  2: 'channel',
  3: 'searchText'
};

export const ChannelFilters: { id: number; name: string }[] = [
  { id: 1, name: CHANNEL_CONSTANTS.WEB },
  { id: 2, name: CHANNEL_CONSTANTS.SMS },
  { id: 3, name: CHANNEL_CONSTANTS.MESSENGER },
  { id: 4, name: CHANNEL_CONSTANTS.WHATSAPP },
  { id: 5, name: CHANNEL_CONSTANTS.TELEGRAM },
  { id: 6, name: CHANNEL_CONSTANTS.IVRR },
];
