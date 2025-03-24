import { CategoryEntity } from '../../src/category/entity/category.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';

export const getCategories = async (
  order: Record<string, string> = {},
): Promise<CategoryEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(CategoryEntity).find({
    order,
  });
};
