import { COMMENT_STATUS } from '@shared/enums/comment-status.enum';
import { IBasePaginatedAPI } from './base-paginated-api.model';

export interface IPendingRecordComment extends IBasePaginatedAPI {
  id: string;
  createdAt?: string;
  channel: string;
  status: COMMENT_STATUS;
  language: string;
  storyLanguage: string;
  content: string;
  authorNickname: string;
  storyPublishedBy: string;
}
