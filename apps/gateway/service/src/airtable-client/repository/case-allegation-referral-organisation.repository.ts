import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncAllegationReferralOrganisationEntity } from '../entity/case-sync-allegation_referral_organisation.entity';

@EntityRepository(CaseSyncAllegationReferralOrganisationEntity)
export class CaseSyncAllegationReferralOrganisationRepository extends Repository<CaseSyncAllegationReferralOrganisationEntity> {}
