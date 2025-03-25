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
