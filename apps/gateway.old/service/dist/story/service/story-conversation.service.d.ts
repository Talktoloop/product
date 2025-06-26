import { StoryConversationRepository } from '../repository/story-conversation.repository';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { UpdateResult } from 'typeorm';
export declare class StoryConversationService {
    private readonly storyConversationRepository;
    constructor(storyConversationRepository: StoryConversationRepository);
    findById(id: number, relations?: string[]): Promise<StoryConversationEntity>;
    findByUUID(uuid: string, relations?: string[]): Promise<StoryConversationEntity>;
    setStoryId(conversationId: number, storyId: string): Promise<UpdateResult>;
    saveConversation(data: Partial<StoryConversationEntity>): Promise<StoryConversationEntity>;
}
