import { Injectable } from '@nestjs/common';
import { StoryConversationRepository } from '../repository/story-conversation.repository';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { UpdateResult } from 'typeorm';

@Injectable()
export class StoryConversationService {
  constructor(
    private readonly storyConversationRepository: StoryConversationRepository,
  ) {}

  async findById(
    id: number,
    relations: string[] = null,
  ): Promise<StoryConversationEntity> {
    return this.storyConversationRepository
      .findByParamsWithRelations({ id }, relations)
      .then((data) => (data ? data : null));
  }

  async findByUUID(
    uuid: string,
    relations: string[] = null,
  ): Promise<StoryConversationEntity> {
    return this.storyConversationRepository
      .findByParamsWithRelations({ uuid }, relations)
      .then((data) => (data ? data : null));
  }

  async setStoryId(
    conversationId: number,
    storyId: string,
  ): Promise<UpdateResult> {
    return this.storyConversationRepository.update(
      { id: conversationId },
      { storyId },
    );
  }

  async saveConversation(
    data: Partial<StoryConversationEntity>,
  ): Promise<StoryConversationEntity> {
    return this.storyConversationRepository.save(data);
  }
}
