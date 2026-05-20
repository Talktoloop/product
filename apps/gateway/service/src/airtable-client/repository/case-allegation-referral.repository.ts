import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncAllegationReferralEntity } from '../entity/case-sync-allegation_referral.entity';

@EntityRepository(CaseSyncAllegationReferralEntity)
export class CaseSyncAllegationReferralRepository extends Repository<CaseSyncAllegationReferralEntity> {}
