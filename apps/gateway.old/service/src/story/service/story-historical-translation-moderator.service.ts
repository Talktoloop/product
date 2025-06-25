import { Injectable } from '@nestjs/common';
import { StoryHistoricalTranslationRepository } from '../repository/story-historical-translation.repository';
import { StoryHistoricalTranslationEntity } from '../entity/story-historical-translation.entity';
import { StoryEntity } from '../entity/story.entity';

@Injectable()
export class StoryHistoricalTranslationModeratorService {
  constructor(
    private readonly storyHistoricalTranslationRepository: StoryHistoricalTranslationRepository,
  ) { }

  async findHistoricaloriginalContentForStory(
    story: StoryEntity,
    order: Record<string, string> = { createdAt: 'ASC' },
  ): Promise<StoryHistoricalTranslationEntity> {
    const originalContent = story.translations.find(
      (item) => item.languageId === story.languageId,
    );
    return this.findOneByIdAndOrder(originalContent.id, order, true);
  }

  async findOneByIdAndOrder(
    id: number,
    order: Record<string, string>,
    isRecoverable?: boolean,
  ) {
    const params: Record<string, unknown> = {
      translationId: id,
    };

    if (isRecoverable !== undefined) {
      params.isRecoverable = isRecoverable;
    }

    return this.storyHistoricalTranslationRepository.findOne({
      where: params,
      order,
    });
  }

  contentIsDefined(value: string): boolean {
    return value && value !== '';
  }

  async save(
    data: Partial<StoryHistoricalTranslationEntity>,
  ): Promise<StoryHistoricalTranslationEntity> {
    const previousEntry = await this.findOneByIdAndOrder(data.translationId, {
      createdAt: 'DESC',
    });

    if (
      !data.translationId ||
      !this.contentIsDefined(data.content) ||
      previousEntry?.content === data.content
    ) {
      return;
    }

    return this.storyHistoricalTranslationRepository.save(data);
  }
}
