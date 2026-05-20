export default interface ModeratorFlowMessageInterface {
  senderId: string;
  pageId: string;
  message: string;
  introduction?: string;
  storyId: string;
  story: string;
  messengerConversationId: number;
  language: string;
}
