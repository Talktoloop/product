import { StoryStatus } from './story.status';

export default interface StoryStatusToMessengerConversationInterface {
  language: string;
  senderId: string;
  pageId: string;
  messageType: StoryStatus;
  story: string;
  messengerConversationId: number;
  reasonText?: string;
}
