import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
import { GET_STORY_FAILED, STORY_STATUS } from '@ourloop/shared';
import { Logger, BadRequestException } from '@nestjs/common';

@EntityRepository(StoryRecipientEntity)
export class StoryRecipientRepository extends Repository<StoryRecipientEntity> {
  private readonly logger = new Logger(StoryRecipientRepository.name);

  async findDataToExport(storyIds: string[]): Promise<
    (StoryRecipientEntity & { storyId: string })[]
  > {
    return this.createQueryBuilder('recipient')
      .select('recipient.gender_by_moderator', 'genderByModerator')
      .addSelect('recipient.age_by_moderator', 'ageByModerator')
      .addSelect('story.id', 'storyId')
      .innerJoin(
        'recipient.story',
        'story',
        'story.recipient_id = recipient.id',
      )
      .where('story.id IN (:...storyIds)', { storyIds })
      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_STORY_FAILED);
      });
  }

  findLastEntryByCommunicatorId(
    communicatorId: string,
    relations: string[] = null,
  ): Promise<StoryRecipientEntity> {
    if (!communicatorId) return;

    return this.findOne({
      where: { communicatorId },
      relations: relations ?? null,
      order: { createdAt: 'DESC' },
    });
  }

  async findStoryIdsByMinority(isMinority: boolean): Promise<{ storyId: string }[]> {
    return this.createQueryBuilder('recipient')
      .select('story.id', 'storyId')
      .innerJoin('recipient.story', 'story')
      .where('recipient.is_minority_by_moderator = :isMinority', { isMinority })
      .getRawMany();
  }
}
