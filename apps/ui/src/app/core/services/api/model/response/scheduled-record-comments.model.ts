import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { COMMENT_STATUS } from '@shared/enums/comment-status.enum';
import { IBasePaginatedAPI } from './base-paginated-api.model';

export interface IScheduledRecordComment extends IBasePaginatedAPI {
  id: string;
  createdAt?: string;
  channel: CHANNEL_CONSTANTS;
  status: COMMENT_STATUS;
  country: string;
  categories: Array<string>;
  language: string;
  storyLanguage: string;
  content: string;
  storyPublishedBy: string;
  authorNickname: string;
}
