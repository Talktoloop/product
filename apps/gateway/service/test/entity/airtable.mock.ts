import { IsNull } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { CaseSyncEntity } from '../../src/airtable-client/entity/case-sync.entity';

export const addSyncData = async (data: CaseSyncEntity[]): Promise<void> => {
  const connection = await getConnection(config);

  for (const row of data) {
    await connection.getRepository(CaseSyncEntity).save(row);
  }
};

export const findCaseById = async (id: string): Promise<CaseSyncEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(CaseSyncEntity).findOne({
    where: {
      caseUUID: id,
      deletedAt: IsNull(),
    },
  });
};
