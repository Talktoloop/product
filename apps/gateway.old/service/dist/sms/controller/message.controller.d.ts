import { MessageService } from '../service/message.service';
import { SuccessRO } from '../../common/response/success.ro';
import { SendMessageDto } from '../request/dto/send-message.dto';
import { StoryService } from '../../story/service/story.service';
import { UserEntity } from '../../user/entity/user.entity';
import { ClientProxy } from '@nestjs/microservices';
import { SMSConversationModel } from '@ourloop/shared';
import { PhoneAvailabilityRO } from '../response/phone-availability.ro';
import { ConfigService } from '@nestjs/config';
import { TextItOutgoingMessageDto } from '../request/dto/textit-outgoing-message.dto';
import { TextItIngoingMessageDTO } from '../request/dto/textit-ingoing-message.dto';
import { TextIt } from '../../common/provider/textit-provider';
import { FinishedTextItFlowDTO } from '../request/dto/finished-textit-flow.dto';
export declare class MessageController {
    private readonly messageService;
    private readonly storyService;
    private readonly clientProxy;
    private readonly config;
    private readonly textItProvider;
    private readonly logger;
    constructor(messageService: MessageService, storyService: StoryService, clientProxy: ClientProxy, config: ConfigService, textItProvider: TextIt);
    sendSMSMessage(user: UserEntity, data: SendMessageDto): Promise<SuccessRO>;
    saveMessages(data: SMSConversationModel): Promise<SuccessRO>;
    checkPhoneAvailability(storyId: string): Promise<PhoneAvailabilityRO>;
    finishedTextItFLow(data: FinishedTextItFlowDTO): Promise<SuccessRO>;
    sendTextItMessage(data: TextItOutgoingMessageDto): Promise<SuccessRO>;
    notifyTextItAboutNewMessage(data: TextItIngoingMessageDTO): Promise<SuccessRO>;
}
