import { CategoryEntity } from '../../category/entity/category.entity';
import getRandomValueWithExcluded from './get-random-value-with-excluded';

const getRandomCategory = (
  categories: CategoryEntity[],
  excluded: number[] = [],
): CategoryEntity => {
  return getRandomValueWithExcluded(
    categories.filter((item) => !excluded.includes(item.id)),
  );
};

export default getRandomCategory;
