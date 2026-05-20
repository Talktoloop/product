import { reverseMapping } from '@shared/utils/filters.utils';

export enum Age {
  BETWEEN_14_AND_17 = 1,
  BETWEEN_18_AND_29 = 2,
  BETWEEN_30_AND_59 = 3,
  SIXTY_PLUS = 4,
  NO_ANSWER = 0,
}

export const AGE_VALUE = {
  BETWEEN_14_AND_17: 1,
  BETWEEN_18_AND_29: 2,
  BETWEEN_30_AND_59: 3,
  SIXTY_PLUS: 4,
  NO_ANSWER: 0,
};

export const AGE_MAPPING = {
  6: 'age.between0_5',
  5: 'age.between6_13',
  1: 'age.between14_17',
  2: 'age.between18_29',
  3: 'age.between30_59',
  4: 'age.60Plus',
  0: 'age.noAnswer',
};
export const AGE_VALUE_EXTENDED = {
  BETWEEN_0_AND_13: 7,
  ...AGE_VALUE,
};

export const AGE_MAPPING_EXTENDED = {
  7: 'age.between0_13',
  ...AGE_MAPPING,
}
export const CASES_AGE_MAPPING = {
  lessThen6: 6,
  lessThen14: 5,
  lessThen18: 1,
  lessThen30: 2,
  lessThen60: 3,
  moreThen59: 4,
  noAnswer: 0,
};

export const CASES_AGE_REVERSE_MAPPING = reverseMapping(CASES_AGE_MAPPING);
