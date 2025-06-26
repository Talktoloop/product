import { StoryWebModeratorRO } from './story-web-moderator.ro';
import { MessageRO } from '../../sms/response/message.ro';
export declare class StorySMSModeratorRO extends StoryWebModeratorRO {
    messages: MessageRO[];
    contactAccepted: boolean;
}
