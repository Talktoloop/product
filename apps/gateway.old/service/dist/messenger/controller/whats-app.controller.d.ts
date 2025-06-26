import { MessengerService } from '../service/messenger.service';
import { MessengerFlowRequestDto } from '../request/dto/messenger-flow.dto';
import { ConversationRO } from '../../common/response/conversation.ro';
import { SuccessRO } from '../../common/response/success.ro';
import { SendMessageDto } from '../../sms/request/dto/send-message.dto';
import { MessengerAvailabilityRO } from '../response/messenger-availability.ro';
import { UserResponseDto } from '../request/dto/user-response.dto';
import { StoryService } from '../../story/service/story.service';
export declare class WhatsAppMessengerController {
    private readonly messengerService;
    private readonly storyService;
    constructor(messengerService: MessengerService, storyService: StoryService);
    saveWhatsAppFlowRecord(data: MessengerFlowRequestDto): Promise<ConversationRO>;
    sendWhatsAppMessage(data: SendMessageDto): Promise<SuccessRO>;
    saveWhatsAppMessage(data: UserResponseDto): Promise<SuccessRO>;
    checkWhatsAppAvailability(storyId: string): Promise<MessengerAvailabilityRO>;
}
