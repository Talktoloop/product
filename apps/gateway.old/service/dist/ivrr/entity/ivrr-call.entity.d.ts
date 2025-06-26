import { UserEntity } from '../../user/entity/user.entity';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
export interface IvrrCallPayload {
    twilioCallSid: string;
    s3FileId: string;
    conversation: StoryConversationEntity;
    isStory: boolean;
    isModeratorCall: boolean;
    twilioFlowXml?: string;
    user?: UserEntity;
    callDate: Date;
    recordingDuration?: number;
}
export declare class IvrrCallEntity {
    id: number;
    twilioCallSid: string;
    s3FileId: string;
    percentageLevelOfListeningCall: number;
    twilioFlowXml?: string;
    content?: string;
    commentId?: string;
    transcriptionStatus?: number;
    conversationId: number;
    isStory: boolean;
    isModeratorCall: boolean;
    callDate: Date;
    recordingDuration: number;
    createdAt: Date;
    conversation: StoryConversationEntity;
    userId: string;
    user: UserEntity;
    static createFrom(payload: IvrrCallPayload): IvrrCallEntity;
}
