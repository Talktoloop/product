import { FacebookIncomingMessageInterface } from '../../common/interface/facebook-message-request';
import WhatsappIncommingMessageInterface from '../../common/interface/whatsapp-incomming-message';
import TelegramIncomingMessageInterface from '../../common/interface/telegram-inoming_message';

export type IncomingMessage =
  | FacebookIncomingMessageInterface
  | WhatsappIncommingMessageInterface
  | TelegramIncomingMessageInterface;
