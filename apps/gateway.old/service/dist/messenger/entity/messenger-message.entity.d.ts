import { UserEntity } from '../../user/entity/user.entity';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
export interface StoreMessengerFlowMessagePayload {
    content: string;
    type: number;
    messageCreatedAt: Date;
    conversation: StoryConversationEntity;
    isStory: boolean;
    user?: UserEntity;
}
export declare class MessengerMessageEntity {
    id: number;
    content: string;
    type: number;
    conversationId: number;
    isStory: boolean;
    isPinned: boolean;
    messageCreatedAt: Date;
    createdAt: Date;
    conversation: StoryConversationEntity;
    userId: string;
    user: UserEntity;
}
