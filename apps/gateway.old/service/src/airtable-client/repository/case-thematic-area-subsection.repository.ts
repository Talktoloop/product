import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncThematicAreaSubsectionEntity } from '../entity/case-sync-thematic-area-subsection.entity';

@EntityRepository(CaseSyncThematicAreaSubsectionEntity)
export class CaseThematicAreaSubsectionRepository extends Repository<CaseSyncThematicAreaSubsectionEntity> {}
