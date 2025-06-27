import { ISMSMessage } from '@app/core/services/api/model/story-sms-message.model';
import { STORY_STATUS } from '@app/shared/enums/story-status.enum';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { STORY_TYPE } from '@core/services/api/story/story.service';
import { Age } from '@shared/types/age.type';
import { Gender } from '@shared/types/gender.type';
import { ICategory } from './response/get-categories.model';
import { SENSITIVE_MARKED_BY } from './sensitive-marked-by';
import { IStoryTranslation } from './story-translation';

export interface ICallIVRR {
  createdAt: string;
  id: string;
  isModeratorCall: boolean;
  isStory: boolean;
  s3FileId: string;
  storyId: string;
  twilioCallSid: string;
  url: string;
}

export interface IOrganisation {
  id: string;
  name: string;
  replied: boolean;
  acronym: string;
  countryId: string;
  storiesCount: number;
  usersCount: number;
  verified?: boolean;
  countryName: string;
  countryCode: string;
}

export interface IUserOrganisation {
  organisationId: string;
  name: string;
}

export interface ILinkUsers {
  storyId: string;
  links: LinkUserToOrganisation[];
}

export interface LinkUserToOrganisation {
  email: string;
  organisationId: string;
  languageCode: string;
}

export interface IPostAuthorDate {
  authorNickname?: string;
  publishedAt?: string;
  createdAt?: string;
  user?: {
    nickname?: string;
    organisation?: string;
  };
}

export interface IStoryPlace {
  country: string;
  place?: string;
}

export interface ICaseManagerNoteViewModel {
  date: string;
  name: string;
  text: string;
}

export interface IStoryIVRR {
  calls: ICallIVRR[];
}

export interface IStory extends IPostAuthorDate, IStoryPlace, IStoryIVRR {
  age?: Age;
  caseManagerName?: string;
  caseManagerNote?: string;
  caseManagerReturnedAt?: string;
  categories: ICategory[];
  channel: CHANNEL_CONSTANTS;
  comments: number;
  contactAccepted?: boolean;
  content: string;
  historicalContent: string;
  contentType: STORY_TYPE;
  createdAt: string;
  difficulties: Array<{
    id: string;
    code: string;
  }>;
  emailProvided?: boolean;
  gender?: Gender;
  id: string;
  isSensitive: boolean;
  language?: string;
  markedAsSensitiveBy?: SENSITIVE_MARKED_BY;
  messages: ISMSMessage[];
  maternityStatus: Array<{
    id: string;
    title: string;
  }>;
  nickname: string;
  organisations: IOrganisation[];
  publishedAt: string;
  status: STORY_STATUS;
  thematics?: number[];
  title?: string;
  translations: IStoryTranslation[];
  views: number;
  votes: number;
  regionId: number;
  countryId: number;
  isUrgent?: boolean;
  isMinority?: boolean;
  otherStoriesSameRecipient?: { id: string; createdAt: Date; status: string }[];
}
