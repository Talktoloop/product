import { Repository, IsNull } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CaseSyncEntity } from '../entity/case-sync.entity';

@EntityRepository(CaseSyncEntity)
export class AirTableClientRepository extends Repository<CaseSyncEntity> {
  findByUUID(caseUUID: string): Promise<CaseSyncEntity> {
    if (!caseUUID) return;

    return this.findOne({
      where: { caseUUID, deletedAt: IsNull() },
    });
  }

  findNotAnonymized(): Promise<CaseSyncEntity[]> {
    return this.find({ where: { deletedAt: IsNull() } });
  }
}
