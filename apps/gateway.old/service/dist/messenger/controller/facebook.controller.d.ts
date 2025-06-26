import { MessengerService } from '../service/messenger.service';
import { MessengerFlowRequestDto } from '../request/dto/messenger-flow.dto';
import { SuccessRO } from '../../common/response/success.ro';
import { UserResponseDto } from '../request/dto/user-response.dto';
import { SendMessageDto } from '../../sms/request/dto/send-message.dto';
import { MessengerAvailabilityRO } from '../response/messenger-availability.ro';
import { MessengerUserDataRO } from '../response/messenger-user-data.ro';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { StoryService } from '../../story/service/story.service';
export declare class FacebookMessengerController {
    private readonly messengerService;
    private readonly storyService;
    constructor(messengerService: MessengerService, storyService: StoryService);
    saveMessengerFlowRecord(data: MessengerFlowRequestDto): Promise<StoryConversationEntity>;
    testInternal(): Promise<SuccessRO>;
    sendMessengerMessage(data: SendMessageDto): Promise<SuccessRO>;
    saveMessengerResponse(data: UserResponseDto): Promise<SuccessRO>;
    findMessengerUserDetails(data: {
        senderId: string;
    }): Promise<MessengerUserDataRO>;
    checkMessengerAvailability(storyId: string): Promise<MessengerAvailabilityRO>;
}
