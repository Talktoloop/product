import { Repository, ObjectLiteral } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { Logger } from '@nestjs/common';

@EntityRepository(StoryConversationEntity)
export class StoryConversationRepository extends Repository<StoryConversationEntity> {
  protected readonly logger = new Logger(StoryConversationRepository.name);

  findByParamsWithRelations(
    params: ObjectLiteral,
    relations: string[] = null,
  ): Promise<StoryConversationEntity> {
    return this.findOne({
      relations: relations ?? null,
      where: params,
    });
  }

  findByStoryUUID(uuid: string): Promise<StoryConversationEntity> {
    if (!uuid) return;

    return this.findOne({
      where: { uuid },
    });
  }
}
