import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { IStoryTranslation, TRANSLATION_TYPE } from '@core/services/api/model/story-translation';

export interface IComment {
  s3FileId: string;
  content: string;
  id: string;
  createdAt: string;
  publishedAt: string;
  emailProvided: boolean;
  user: {
    nickname: string;
    organisation: string;
  };
  authorNickname: string;
  children: Array<IComment>;
  contentType: TRANSLATION_TYPE;
  storyId?: string;
  votes: number;
  status: string,
  language: string;
  storyLanguage: string;
  translations: IStoryTranslation[];
  channel: CHANNEL_CONSTANTS;
  storyChannel: CHANNEL_CONSTANTS;
  thematics?: number[];
  solution_proposed: boolean
}

export interface IUpdateCommentModerator {
  language?: string;
  thematics?: number[]
  solution_proposed?: boolean
}
