interface QuickReply {
  payload: string;
}

export interface Message {
  text: string;
  quick_reply?: QuickReply;
  attachments?: FacebookAttachment[];
}
export interface Postback {
  mid: string;
  title: string;
  payload: any;
  referral: {
    ref: string;
    source: string;
    type: string;
  };
}

export interface FacebookAttachment {
  type: string;
  payload: {
    url: string;
  };
}

export interface MessageBlockInterface {
  sender: { id: string };
  recipient: { id: string };
  message: Message;
  postback?: Postback;
}
