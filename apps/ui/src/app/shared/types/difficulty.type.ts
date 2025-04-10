import { reverseMapping } from '@shared/utils/filters.utils';

export enum Difficulty {
  SEEING = 1,
  HEARING = 2,
  WALKING_OR_CLIMBING_STEPS = 3,
  REMEMBERING = 4,
  SELF_CARE_FOR_EXAMPLE_WASHING = 5,
  COMMUNICATING = 6,
  OTHERS = 7,
  UNSPECIFIED = 8,
  // NONE = 9,
}

export const DIFFICULTY_MAPPING = {
  1: Difficulty.SEEING,
  2: Difficulty.HEARING,
  3: Difficulty.WALKING_OR_CLIMBING_STEPS,
  4: Difficulty.REMEMBERING,
  5: Difficulty.SELF_CARE_FOR_EXAMPLE_WASHING,
  6: Difficulty.COMMUNICATING,
  7: Difficulty.OTHERS,
  8: Difficulty.UNSPECIFIED,
  // 9: Difficulty.NONE,
};

export const DIFFICULTY_TRANSLATE_MAPPING = {
  1: 'difficulty.seeing',
  2: 'difficulty.hearing',
  3: 'difficulty.walkingOrClimbingSteps',
  4: 'difficulty.learning',
  5: 'difficulty.selfCareForExampleWashing',
  6: 'difficulty.communicating',
  7: 'difficulty.other',
  8: 'difficulty.unspecified',
  // 9: 'difficulty.notAnswered',
};

export const CASES_DIFFICULTY_MAPPING = {
  seeing: 1,
  hearing: 2,
  walkingOrClimbingSteps: 3,
  remembering: 4,
  selfCareForExampleWashing: 5,
  communicating: 6,
  others: 7,
  unspecified: 8,
  // none: 9,
};

export const CASES_DIFFICULTY_REVERSE_MAPPING = reverseMapping(CASES_DIFFICULTY_MAPPING);
