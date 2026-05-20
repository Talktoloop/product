import { reverseMapping } from '@shared/utils/filters.utils';

export const ASSISTANCE_REFERRED_MAPPING = {
  0: 'yes',
  1: 'no',
  2: 'notApplicable',
};

export const ASSISTANCE_REFERRED_REVERSE_MAPPING = reverseMapping(ASSISTANCE_REFERRED_MAPPING);
