import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncSurvivorDisabilityEntity } from '../entity/case-sync-survivor-disability.entity';

@EntityRepository(CaseSyncSurvivorDisabilityEntity)
export class CaseSurvivorDisabilityAreaRepository extends Repository<CaseSyncSurvivorDisabilityEntity> {}
