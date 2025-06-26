import { MessengerService } from '../service/messenger.service';
import { MessengerFlowRequestDto } from '../request/dto/messenger-flow.dto';
import { ConversationRO } from '../../common/response/conversation.ro';
import { SuccessRO } from '../../common/response/success.ro';
import { SendMessageDto } from '../../sms/request/dto/send-message.dto';
import { MessengerAvailabilityRO } from '../response/messenger-availability.ro';
import { UserResponseDto } from '../request/dto/user-response.dto';
import { StoryService } from '../../story/service/story.service';
export declare class TelegramMessengerController {
    private readonly messengerService;
    private readonly storyService;
    constructor(messengerService: MessengerService, storyService: StoryService);
    saveTelegramFlowRecord(data: MessengerFlowRequestDto): Promise<ConversationRO>;
    sendTelegramMessage(data: SendMessageDto): Promise<SuccessRO>;
    saveTelegramMessage(data: UserResponseDto): Promise<SuccessRO>;
    checkTelegramConversationAvailability(storyId: string): Promise<MessengerAvailabilityRO>;
}
