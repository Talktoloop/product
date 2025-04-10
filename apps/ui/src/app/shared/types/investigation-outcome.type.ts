import { reverseMapping } from '@shared/utils/filters.utils';

export const INVESTIGATION_OUTCOME_MAPPING = {
  0: 'offenceSubstantiatedAndOffender',
  1: 'offenderResignedFromOrganisation',
  2: 'offenderFacedDisciplinary',
  3: 'notEnoughInformation',
  4: 'referralToMisconductDisclosureScheme',
  5: 'other',
};

export const INVESTIGATION_OUTCOME_REVERSE_MAPPING = reverseMapping(INVESTIGATION_OUTCOME_MAPPING);
