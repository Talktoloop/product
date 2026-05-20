import { DifficultyEntity } from '../../src/lexicon/entity/difficulty.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';

export const getDifficulties = async (): Promise<DifficultyEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(DifficultyEntity).find({
    order: {
      id: 'ASC',
    },
  });
};
