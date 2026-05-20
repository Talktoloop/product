import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncThematicAreaEntity } from '../entity/case-sync-thematic-area.entity';

@EntityRepository(CaseSyncThematicAreaEntity)
export class CaseThematicAreaRepository extends Repository<CaseSyncThematicAreaEntity> {}
