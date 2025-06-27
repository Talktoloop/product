export enum SENDER_TYPE {
  LOOP = 'loop',
  MODERATOR = 'moderator',
  ISSUER = 'issuer',
}
export interface ISMSSender {
  id?: string;
  username?: string;
  type: SENDER_TYPE;
}

export interface ISMSMessage {
  id: string;
  storyId?: string;
  content: string;
  sender: ISMSSender;
  createdAt: string;
  sending?: boolean;
  isPinned: boolean;
}
