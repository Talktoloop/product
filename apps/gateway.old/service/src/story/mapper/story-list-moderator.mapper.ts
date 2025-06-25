import { plainToClass } from 'class-transformer';
import { StoryEntity } from '../entity/story.entity';
import { StoryListModeratorRO } from '../response/story-list-moderator.ro';

export const pendingStoriesMapper = (
  pendingStories: StoryEntity[],
): StoryListModeratorRO[] =>
  pendingStories.map((story: Record<string, any>) => {
    return plainToClass(StoryListModeratorRO, {
      ...story,
      country: story.countryCode,
      language: story.languageCode,
      types: story.categories.map((categoryCode) => categoryCode),
    });
  });
