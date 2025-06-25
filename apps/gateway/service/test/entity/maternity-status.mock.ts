import { MaternityStatusEntity } from '../../src/lexicon/entity/maternity-status.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';

export const getMaternityStatuses = async (): Promise<
  MaternityStatusEntity[]
> => {
  const connection = await getConnection(config);

  return connection.getRepository(MaternityStatusEntity).find({
    order: {
      id: 'ASC',
    },
  });
};

export const getRandomMaternityStatus = (
  statuses: MaternityStatusEntity[],
  excluded: number[] = [],
): MaternityStatusEntity => {
  return getRandomValueWithExcluded(
    statuses.filter((item) => !excluded.includes(item.id)),
  );
};
