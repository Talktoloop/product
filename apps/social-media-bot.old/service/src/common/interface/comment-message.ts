export default interface CommentMessageInterface {
  messengerConversationId: number;
  senderId: string;
  pageId: string;
  language: string;
  organization?: string;
  reply: string;
}
