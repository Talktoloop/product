export enum TRANSLATION_TYPE {
  HUMAN = 'manual',
  MACHINE = 'machine',
}

// Backend model
export enum TRANSLATION_STATUS_CONSTANTS {
  DRAFT = 0,
  TRANSLATING = 1,
  TRANSLATED = 2,
  ERROR = 3,
}
export interface IStoryTranslation {
  content: string;
  code: string;
  type: TRANSLATION_TYPE;
  status: TRANSLATION_STATUS_CONSTANTS;
}

export interface IPutStoryTranslation {
  content: string;
  language: string;
}
