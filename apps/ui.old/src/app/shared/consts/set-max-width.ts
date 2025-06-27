import { InboxFilters } from '@app/modules/inbox/inbox-filters.config';
import { FiltersNamesMapping, OutboxPendingFilters } from '@app/modules/outbox/outbox-filter/outbox-filter.model';
import {
  CasesFilters,
  DEMOGRAPHIC_FILTER_SESSION_STORAGE_KEYS,
  LOCATION_FILTER_SESSION_STORAGE_KEYS,
  StoriesFilters,
} from '../components/filters-section-v2/filters.config';

export const SET_MAX_WIDTH_ALLOWED_QUERY_PARAMS = [
  ...Object.values(FiltersNamesMapping),
  ...Object.values(InboxFilters),
  ...Object.values(OutboxPendingFilters),
  ...Object.values(StoriesFilters),
  ...DEMOGRAPHIC_FILTER_SESSION_STORAGE_KEYS,
  ...LOCATION_FILTER_SESSION_STORAGE_KEYS,
  ...Object.values(CasesFilters),
  'processedStoryId',
  'processedReplyId',
];
