import { reverseMapping } from '@shared/utils/filters.utils';

export enum Gender {
  FEMALE = 1,
  MALE = 2,
  NON_BINARY = 3,
  NO_ANSWER = 0,
}

export const GENDER_VALUE = {
  FEMALE: 1,
  MALE: 2,
  NON_BINARY: 3,
  NO_ANSWER: 0,
};

export const GENDER_MAPPING = {
  1: 'gender.female',
  2: 'gender.male',
  3: 'gender.nonBinary',
  0: 'gender.noAnswer',
};

export const CASES_GENDER_MAPPING = {
  female: 1,
  male: 2,
  nonBinary: 3,
  noAnswer: 0,
};

export const CASES_GENDER_REVERSE_MAPPING = reverseMapping(CASES_GENDER_MAPPING);
