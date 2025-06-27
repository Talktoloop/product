export interface IConversationAvailable {
  storyId: string;
  type: 'sms' | 'chat' | 'reply' | null;
}
