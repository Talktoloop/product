export enum StoryCategory {
  SENSITIVE = 'sensitive',
  THANKS = 'thanks',
  QUESTION = 'question',
  OPINION = 'opinion',
  CONCERN = 'concern',
  REQUEST = 'request',
}

export const StoryCategoryMapping = {
  SENSITIVE: StoryCategory.SENSITIVE,
  1: StoryCategory.THANKS,
  2: StoryCategory.QUESTION,
  3: StoryCategory.OPINION,
  4: StoryCategory.CONCERN,
  5: StoryCategory.REQUEST,
};

export const StatisticsStoryCategoryMapping = {
  1: StoryCategory.THANKS,
  2: StoryCategory.QUESTION,
  3: StoryCategory.OPINION,
  4: StoryCategory.CONCERN,
  5: StoryCategory.REQUEST,
};
