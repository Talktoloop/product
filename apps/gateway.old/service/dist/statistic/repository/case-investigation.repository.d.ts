import { CaseSyncInvestigationEntity } from '../../airtable-client/entity/case-sync-investigation.entity';
import { FindOptions, ObjectLiteral, Repository } from 'typeorm';
import { FilterCasesDto } from '../request/dto/filter.dto';
export declare class CaseInvestigationRepository extends Repository<CaseSyncInvestigationEntity> {
    countWhen(where?: string | ObjectLiteral | FindOptions<CaseSyncInvestigationEntity> | FindOptions<CaseSyncInvestigationEntity>[], filters?: FilterCasesDto): Promise<number | any>;
}
