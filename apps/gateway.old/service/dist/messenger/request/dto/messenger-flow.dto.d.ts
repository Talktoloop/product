import { FlowResponseRequestDto } from './flow-response.dto';
import { MessengerUserRequestDto } from './messenger-user.dto';
export declare class MessengerFlowRequestDto {
    storyUuid: string;
    lastFlowId?: string;
    flowStartedAt: Date;
    senderId: string;
    pageId: string;
    lang: string;
    additionalInfo: string;
    storyType: string;
    shareUserInfo: boolean;
    user: MessengerUserRequestDto;
    flowResponses: Array<FlowResponseRequestDto>;
}
