import { reverseMapping } from '@shared/utils/filters.utils';

export enum RepliedTo {
  REPLIED_TO_BY_ORGANISATION = 1,
  REPLIED_TO_BY_COMMUNITY = 2,
  NOT_REPLIED_TO = 3,
}

export const REPLIED_TO_VALUE = {
  REPLIED_TO_BY_ORGANISATION: 1,
  REPLIED_TO_BY_COMMUNITY: 2,
  NOT_REPLIED_TO: 3,
};

export const REPLIED_TO_MAPPING = {
  1: 'repliedTo.repliedToByOrganisation',
  2: 'repliedTo.repliedToByCommunity',
  3: 'repliedTo.notRepliedTo',
};

export const CASES_REPLIED_TO_MAPPING = {
  repliedToByOrganisation: 1,
  repliedToByCommunity: 2,
  notRepliedTo: 3,
};

export const CASES_REPLIED_TO_REVERSE_MAPPING = reverseMapping(CASES_REPLIED_TO_MAPPING);
