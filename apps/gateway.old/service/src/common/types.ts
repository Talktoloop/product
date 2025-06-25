export const REJECT_REASON_CODE = {
  POOR_AUDIO_QUALITY: 'poorAudioQuality',
  OTHER: 'other',
};

export const TIME_UNIT = {
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
};

export const AGE_VALUE = {
  '1-14': 7,
  '14-17': 1,
  '18-29': 2,
  '30-59': 3,
  '60+': 4,
  'No answer': 0,
};

export const DIFFICULTY_VALUE = {
  NO: 0,
  YES: 1,
  NO_ANSWER: 2,
};

export const GENDER_VALUE = {
  FEMALE: 1,
  MALE: 2,
  NON_BINARY: 3,
  NO_ANSWER: 0,
};

export enum GENDER_CONSTANTS {
  FEMALE = 'Female',
  MALE = 'Male',
  NON_BINARY = 'Non-Binary',
  NO_ANSWER = 'No Answer',
}

export const GENDER_NUMBER_TO_CONSTANT: { [key: number]: GENDER_CONSTANTS } = {
  1: GENDER_CONSTANTS.FEMALE,
  2: GENDER_CONSTANTS.MALE,
  3: GENDER_CONSTANTS.NON_BINARY,
  0: GENDER_CONSTANTS.NO_ANSWER,
};

export enum REPLIED_TO_CONSTANTS {
  ORGANISATION = 'Replied By Organisation',
  COMMUNITY = 'Replied By Community',
  NOT_REPLIED = 'Not Replied To',
}

export const REPLIED_TO_NUMBER_TO_CONSTANT: { [key: number]: REPLIED_TO_CONSTANTS } = {
  1: REPLIED_TO_CONSTANTS.ORGANISATION,
  2: REPLIED_TO_CONSTANTS.COMMUNITY,
  3: REPLIED_TO_CONSTANTS.NOT_REPLIED,
};


export const CATEGORY_VALUE = {
  THANKS: 'thanks',
  QuESTION: 'question',
  OPINION: 'opinion',
  CONCERN: 'concern',
  REQUEST: 'request',
};

export enum TypeEnum {
  published = 'published',
  rejected = 'rejected',
  new = 'new',
}

export enum OrderEnum {
  asc = 'ASC',
  desc = 'DESC',
}

export enum StoryModeratorOrderEnum {
  NEWEST_FIRST = 'desc',
  OLDEST_FIRST = 'asc',
  NOT_STARTED = 'not_started',
  PENDING_PUBLICATION = 'pending_publication',
}

export enum StoryOrderEnum {
  NEWEST_FIRST = 'desc',
  OLDEST_FIRST = 'asc',
  UPVOTED = 'upvoted',
}

export enum OrderHierarchy {
  STARTS_FROM = 1,
  OTHERS = 2,
}
