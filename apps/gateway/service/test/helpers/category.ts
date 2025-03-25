import { addStory } from '../entity/story.mock';
import { STORY_STATUS } from '@ourloop/shared';
import { getCategories } from '../entity/category.mock';
import getRandomCategory from '../../src/migrations/utils/get-random-category';
import { CategoryEntity } from '../../src/category/entity/category.entity';
import { DBLexicon } from './story';

export const checkCategoryProperties = (
  responseData: DBLexicon & { count: number },
  dbData: DBLexicon,
  keys: string[] = ['id', 'code'],
): void => {
  expect(responseData.count !== undefined).toBeTruthy();

  for (const key of keys) {
    expect(
      responseData[key] !== undefined && dbData[key] === responseData[key],
    ).toBeTruthy();
  }
};

export const initializeDataset = async (): Promise<{
  category: CategoryEntity;
}> => {
  const categories = await getCategories();
  const category = getRandomCategory(categories);
  const stories = [];

  for (const status of Object.values(STORY_STATUS)) {
    stories.push(await addStory({ status }, { categories: [category] }));
  }

  return { category };
};
