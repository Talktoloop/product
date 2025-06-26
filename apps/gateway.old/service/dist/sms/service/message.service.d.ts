import { MessageRepository } from '../repository/message.repository';
import { MessageEntity } from '../entity/message.entity';
import { SMSConversationModel, SMSMessageModel, STORY_STATUS } from '@ourloop/shared';
import { LanguageRepository } from '../../language/language.repository';
import { StoryService } from '../../story/service/story.service';
import { StoryEntity } from '../../story/entity/story.entity';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { SendMessageDto } from '../request/dto/send-message.dto';
import { ConfigService } from '@nestjs/config';
import { SMSSplitterInterface } from '../interface/sms-splitter.inteface';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { ClientProxy } from '@nestjs/microservices';
import { PhoneAvailabilityRO } from '../response/phone-availability.ro';
import * as twilio from 'twilio';
export declare class MessageService {
    private readonly config;
    private readonly messageRepository;
    private readonly languageRepository;
    private readonly storyService;
    private readonly storyModeratorService;
    private readonly clientProxy;
    private readonly twilio;
    private readonly logger;
    constructor(config: ConfigService, messageRepository: MessageRepository, languageRepository: LanguageRepository, storyService: StoryService, storyModeratorService: StoryModeratorService, clientProxy: ClientProxy, twilio: twilio.Twilio);
    static shortenContent(content: string, maxLength: number): string;
    validateMessageLength(details: SMSSplitterInterface, numberOfMessages: number, key: string): void;
    prepareListOfMessages(messages: string[], data: SMSSplitterInterface): string[];
    prepareMessages(story: StoryEntity, data: SendMessageDto): string[];
    checkPhoneAvailability(provider: string, story: StoryEntity): Promise<PhoneAvailabilityRO>;
    saveMessages(conversation: StoryConversationEntity, data: SMSConversationModel, languageId?: number): Promise<{
        messages: MessageEntity[];
        story: StoryEntity;
    }>;
    selectStoryStatus(status: STORY_STATUS, message: SMSMessageModel): STORY_STATUS;
    getSmsMessagesByConversationId(conversationId: number): Promise<MessageEntity[]>;
    clearPhone(phone: string): string;
    checkCountryCodeAndProvider(phone: string): Promise<{
        phone: string;
        countryCode: string;
        provider: string;
    }>;
}
