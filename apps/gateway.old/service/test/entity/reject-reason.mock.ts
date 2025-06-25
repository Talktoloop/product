import { RejectReasonEntity } from '../../src/lexicon/entity/reject-reason.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';

export const getRejectReasons = async (): Promise<RejectReasonEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(RejectReasonEntity).find({
    order: {
      id: 'ASC',
    },
  });
};

export const getRandomRejectReason = (
  rejectReasons: RejectReasonEntity[],
  excluded: number[] = [],
): RejectReasonEntity => {
  return getRandomValueWithExcluded(
    rejectReasons.filter((item) => !excluded.includes(item.id)),
  );
};
