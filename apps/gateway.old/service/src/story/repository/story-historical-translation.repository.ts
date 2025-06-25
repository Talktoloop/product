import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryHistoricalTranslationEntity } from '../entity/story-historical-translation.entity';

@EntityRepository(StoryHistoricalTranslationEntity)
export class StoryHistoricalTranslationRepository extends Repository<StoryHistoricalTranslationEntity> {}
