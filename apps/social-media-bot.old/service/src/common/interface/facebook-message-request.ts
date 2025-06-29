import { MessageBlockInterface } from './message-block';

export interface FacebookMessageEntry {
  id: string;
  time: Date;
  messaging: MessageBlockInterface[];
}

export interface FacebookIncomingMessageInterface {
  object: string;
  entry: FacebookMessageEntry[];
}
