import { MessageEntity } from '../../sms/entity/message.entity';
import { MessageRO } from '../response/message.ro';
export declare const messagesMapper: (messages: MessageEntity[]) => MessageRO[];
