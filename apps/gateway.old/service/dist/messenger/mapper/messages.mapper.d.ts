import { MessengerMessageEntity } from '../entity/messenger-message.entity';
import { MessageRO } from '../../sms/response/message.ro';
import { StoryEntity } from '../../story/entity/story.entity';
export declare const messageMapper: (messages: MessengerMessageEntity[], story: StoryEntity) => MessageRO[];
