export const ORGANISATION_RESPONSIVENESS_TO_VALUE = {
  REPLIED_TO_BY_SPECIFIC_ORGANISATION: 1,
  REPLIED_TO_BY_ORGANISATION: 2,
  SOLUTION_PROPOSED: 3,
  NOT_REPLIED_TO: 4,
};

export const ORGANISATION_RESPONSIVENESS_TO_MAPPING = {
  1: 'repliedTo.repliedToBySpecificOrganisation',
  2: 'repliedTo.repliedToByOrganisation',
  3: 'repliedTo.solutionProposed',
  4: 'repliedTo.notRepliedTo',
};
