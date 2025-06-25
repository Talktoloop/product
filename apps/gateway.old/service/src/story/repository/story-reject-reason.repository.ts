import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryRejectReasonEntity } from '../entity/story-reject-reason.entity';

@EntityRepository(StoryRejectReasonEntity)
export class StoryRejectReasonRepository extends Repository<StoryRejectReasonEntity> {}
