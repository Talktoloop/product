import { CategoryEntity } from '../../category/entity/category.entity';
declare const getRandomCategory: (categories: CategoryEntity[], excluded?: number[]) => CategoryEntity;
export default getRandomCategory;
