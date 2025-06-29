import User from './user';
import { FlowMessageType } from '../enum/flow-message-type.enum';
import { StoryType } from '../enum/story-type.enum';
import { Flow } from '../enum/flow.enum';
import { BooleanAnswer } from '../enum/boolean-answer.enum';

export interface UserFlowMessageInterface {
  content: string;
  type: FlowMessageType;
  createdAt: Date;
  isStory?: boolean;
  queueJobId?: string;
  flow?: Flow;
  sid?: string;
}

export interface UserRecordInterface {
  senderId: string;
  storyUuid: string;
  flowStartedAt: Date;
  lastFlowId: Flow;
  lang: string;
  flowResponses: Array<UserFlowMessageInterface>;
  story: string;
  additionalInfo: string;
  storyType: StoryType;
  user: User;
  shareUserInfo: BooleanAnswer | boolean;
  holdOnSendMessage?: boolean;
  pageId: string;
}

export interface UserModeratorFlowInterface {
  messengerConversationId: number;
  language: string;
}
