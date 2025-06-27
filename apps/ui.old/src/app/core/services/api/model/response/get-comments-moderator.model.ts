import { COMMENT_STATUS } from '@shared/enums/comment-status.enum';
import { IBasePaginatedAPI } from './base-paginated-api.model';

export interface IModeratorCommentBrief extends IBasePaginatedAPI {
  channel: string;
  id: string;
  language: string;
  publishedAt?: string;
  createdAt?: string;
  status: COMMENT_STATUS;
}
