import { reverseMapping } from '@shared/utils/filters.utils';

export const CASE_TYPE_MAPPING = {
  0: 'SEAH',
  1: 'protection',
  2: 'fraudOrCorruption',
  3: 'otherMisconduct',
  4: 'urgentCases',
};

export const CASE_TYPE_REVERSE_MAPPING = reverseMapping(CASE_TYPE_MAPPING);
