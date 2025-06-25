import { Repository, Like } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
import { Logger } from '@nestjs/common';

@EntityRepository(StoryTranslationEntity)
export class StoryTranslationRepository extends Repository<StoryTranslationEntity> {
  private readonly logger = new Logger(StoryTranslationRepository.name);

  getParticularTranslationForStory(
    storyId: string,
    languageId: number,
  ): Promise<StoryTranslationEntity> {
    if (!storyId) return;

    return this.findOne({ where: { storyId, languageId } });
  }

  getStoriesByPhrase(phrase: string): Promise<StoryTranslationEntity[]> {
    return this.find({ where: { content: Like(`%${phrase}%`) } });
  }

  async findStoryIdsBySearchTerm(searchTerm: string): Promise<{ storyId: string }[]> {
    return this.createQueryBuilder('translation')
      .select('translation.story_id', 'storyId')
      .where('MATCH(translation.content) AGAINST(:searchTerm IN NATURAL LANGUAGE MODE)', { searchTerm })
      .getRawMany();
  }
}
