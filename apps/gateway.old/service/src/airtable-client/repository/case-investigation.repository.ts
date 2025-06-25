import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncInvestigationEntity } from '../entity/case-sync-investigation.entity';

@EntityRepository(CaseSyncInvestigationEntity)
export class CaseSyncInvestigationRepository extends Repository<CaseSyncInvestigationEntity> {}
