import { Injectable } from '@nestjs/common';
import { CaseSyncInvestigationEntity } from '../../airtable-client/entity/case-sync-investigation.entity';
import { FindOptions, ObjectLiteral, Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { addFilterCasesCondition } from '../../common/helpers';

@Injectable()
@EntityRepository(CaseSyncInvestigationEntity)
export class CaseInvestigationRepository extends Repository<CaseSyncInvestigationEntity> {
  countWhen(
    where?:
      | string
      | ObjectLiteral
      | FindOptions<CaseSyncInvestigationEntity>
      | FindOptions<CaseSyncInvestigationEntity>[],
    filters?: FilterCasesDto,
  ): Promise<number | any> {
    let query = this.createQueryBuilder('case_sync_investigation').innerJoin(
      'case_sync',
      'case_sync',
      'case_sync.case_uuid = case_sync_investigation.case_id',
    );
    if (where) {
      query.where(where);
    }

    if (filters) {
      query = addFilterCasesCondition(filters, query, [
        'case_sync_allegation_referral',
      ]);
    }
    return query
      .groupBy('c.id')
      .getCount()
      .catch((err) => console.log(err));
  }
}
