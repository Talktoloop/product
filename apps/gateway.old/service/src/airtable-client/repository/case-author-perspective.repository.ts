import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncAuthorPerspectiveEntity } from '../entity/case-sync-author-perspective.entity';

@EntityRepository(CaseSyncAuthorPerspectiveEntity)
export class CaseAuthorPerspectiveRepository extends Repository<CaseSyncAuthorPerspectiveEntity> {}
