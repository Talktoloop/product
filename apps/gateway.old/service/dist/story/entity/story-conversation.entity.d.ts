import { MessageEntity } from '../../sms/entity/message.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
import { IvrrCallEntity } from '../../ivrr/entity/ivrr-call.entity';
import { StoryEntity } from './story.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TwilioAudioDto } from '../../ivrr/request/dto/twilio-audio.dto';
import { UserEntity } from '../../user/entity/user.entity';
export interface StoreIvrrConversationEntityPayload {
    uuid: string;
    senderId: string;
    language?: LanguageEntity;
    shortCodeNumber: string;
    startedAt: Date;
    calls: Array<TwilioAudioDto>;
}
export interface StoreMessengerFlowMessagePayload {
    content: string;
    type: number;
    messageCreatedAt: Date;
    conversation: StoryConversationEntity;
    isStory: boolean;
    user?: UserEntity;
}
export declare class StoryConversationEntity {
    id: number;
    languageId: number;
    language: LanguageEntity;
    provider: string;
    serviceNumber: string;
    storyId: string;
    story: StoryEntity;
    uuid: string;
    additionalInfo: string;
    startedAt: Date;
    createdAt: Date;
    smsMessages: MessageEntity[];
    messengerMessages: MessengerMessageEntity[];
    ivrrMessages: IvrrCallEntity[];
    static saveMessengerConversation(payload: StoreMessengerFlowMessagePayload): MessengerMessageEntity;
    static saveIvrrConversation(payload: StoreIvrrConversationEntityPayload): StoryConversationEntity;
}
