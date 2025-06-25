import { Repository, Brackets } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { IvrrCallEntity } from '../entity/ivrr-call.entity';
import { TranscribeHistoricalStoriesDto } from '../request/dto/transcribe-historical-stories.dto';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { STORY_STATUS } from '@ourloop/shared';

@EntityRepository(IvrrCallEntity)
export class IvrrCallRepository extends Repository<IvrrCallEntity> {
  async findStoryCallsByLanguageCodeAndDuration(
    params: TranscribeHistoricalStoriesDto,
  ): Promise<
    Array<{
      languageCode: string;
      id: number;
      s3FileId: string;
      storyId: string;
    }>
  > {
    const query = this.createQueryBuilder('call')
      .select('call.id', 'id')
      .addSelect('call.s3FileId', 's3FileId')
      .addSelect('language.transcribeLang', 'languageCode')
      .addSelect('conversation.storyId', 'storyId')
      .innerJoin('call.conversation', 'conversation')
      .innerJoin('conversation.language', 'language')
      .innerJoin('conversation.story', 'story')
      .innerJoin(
        'story.translations',
        'translations',
        '(translations.content = "" or translations.content is null) and translations.language_id = story.language_id',
      )
      .where(`call.recordingDuration >= :duration`, {
        duration: params.minDuration,
      })
      .andWhere('language.code = :language', { language: params.language })
      .andWhere(`story.status NOT IN (:statuses)`, {
        statuses: [
          STORY_STATUS.PUBLISHED,
          STORY_STATUS.REJECTED,
          STORY_STATUS.CONDITIONALLY_REJECTED,
        ],
      })
      .andWhere('call.isStory is true')
      .andWhere(
        new Brackets((qb) => {
          qb.where('call.transcriptionStatus is null').orWhere(
            'call.transcriptionStatus != :transcriptionStatus',
            {
              transcriptionStatus: TRANSLATION_STATUS_CONSTANTS.ERROR,
            },
          );
        }),
      )
      .andWhere(
        new Brackets((qb) => {
          qb.where('call.content is null').orWhere('call.content = ""');
        }),
      );

    return query.execute();
  }
}
