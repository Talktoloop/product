import { ThematicEntity } from '../../src/lexicon/entity/thematic.entity';
import { Not, IsNull } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';

export const getThematics = async (
  notParanets = true,
): Promise<ThematicEntity[]> => {
  const connection = await getConnection(config);
  const conditions: { where: { parentThematicId?: any } } = {
    where: {},
  };

  if (notParanets) {
    conditions.where.parentThematicId = Not(IsNull());
  }

  return connection.getRepository(ThematicEntity).find(conditions);
};

export const getThematicWithoutChildren = async (): Promise<
  ThematicEntity[]
> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(ThematicEntity)
    .find({ where: { parentThematicId: IsNull() } });
};
