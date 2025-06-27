import { Age } from '@shared/types/age.type';
import { Gender } from '@shared/types/gender.type';
import { IStoryTranslation } from '../story-translation';

export interface IUpdateStoryAPI {
  authorNickname?: string;
  age?: Age;
  content?: string;
  categories: number[];
  difficulties: number[];
  gender?: Gender;
  isSensitive: boolean;
  language: string;
  maternityStatus: number[];
  organisations: string[];
  regionId: number;
  countryId: number;
  thematics: number[];
  translations?: Pick<IStoryTranslation, 'content' | 'code'>[];
  pinnedMessageIds?: string[];
  isUrgent?: boolean;
  isMinority?: boolean;
}
