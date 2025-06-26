import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { UserEntity } from '../../user/entity/user.entity';
export declare const MESSAGE_MAX_LENGTH = 640;
export declare class MessageEntity {
    constructor(data?: {
        conversationId?: number;
        languageId?: number;
        content?: string;
        isPinned?: boolean;
        isStory?: boolean;
        isUser?: boolean;
        userId?: string;
        createdAt?: Date;
    });
    id: number;
    isUser: boolean;
    conversationId: number;
    conversation: StoryConversationEntity;
    content: string;
    isPinned: boolean;
    userId: string;
    user: UserEntity;
    isStory: boolean;
    createdAt: Date;
}
