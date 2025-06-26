import { Repository, ObjectLiteral } from 'typeorm';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { Logger } from '@nestjs/common';
export declare class StoryConversationRepository extends Repository<StoryConversationEntity> {
    protected readonly logger: Logger;
    findByParamsWithRelations(params: ObjectLiteral, relations?: string[]): Promise<StoryConversationEntity>;
    findByStoryUUID(uuid: string): Promise<StoryConversationEntity>;
}
