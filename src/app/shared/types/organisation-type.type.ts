import { reverseMapping } from '@shared/utils/filters.utils';

export const ORGANISATION_TYPE_MAPPING = {
  0: 'governmentAuthorities',
  1: 'nationalArmedForces',
  2: 'privateSector',
  3: 'nationalCommunityBasedOrganisation',
  4: 'communityMember',
  5: 'internationalOrganisation',
  6: 'other',
};

export const ORGANISATION_NAME = {
  Loop: 'Loop',
}

export const ORGANISATION_TYPE_REVERSE_MAPPING = reverseMapping(ORGANISATION_TYPE_MAPPING);
