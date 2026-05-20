import { STORY_STATUS } from '@shared/enums/story-status.enum';
import { CHANNEL_CONSTANTS } from '../channel.enum';
import { IBasePaginatedAPI } from './base-paginated-api.model';

export interface IModeratorStoryBrief extends IBasePaginatedAPI {
  channel: CHANNEL_CONSTANTS;
  country: string;
  id: string;
  language: string;
  publishedAt?: string;
  createdAt?: string;
  s3FileId?: string;
  recordingDuration?: string;
  numberOfWords?: number;
  moderatorId?: string;
  moderatorName?: string
  moderatorEmail?: string
  content: string;
  status: STORY_STATUS;
  types: Array<string>;
  isSensitive?: boolean;
  isRejected?: boolean; // Helper property for rejecting story directly from stories list
  selected?: boolean; // Helper property for multi rejecting story from stories list
}
