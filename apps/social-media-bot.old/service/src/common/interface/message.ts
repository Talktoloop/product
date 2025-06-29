import { Flow } from '../enum/flow.enum';

interface QuickReply {
  content_type: string;
  title: string;
  payload: string;
  image_url?: string;
}

interface Recipient {
  id: string;
}

interface MessageGroup {
  text: string;
  quick_replies?: Array<QuickReply>;
  attachment?: Attachment;
}

interface Attachment {
  type: string;
  payload: {
    is_reusable: boolean;
    url: string;
  };
}

export interface MessageInterface {
  flowId?: Flow;
  pageId?: string;
  recipient: Recipient;
  message?: MessageGroup;
  sender_action?: string;
}
