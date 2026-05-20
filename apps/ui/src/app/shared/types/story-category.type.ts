export enum StoryCategory {
  SENSITIVE = 'sensitive',
  THANKS = 'thanks',
  QUESTION = 'question',
  SUGGESTION_OPINION = 'suggestion_opinion',
  CONCERN = 'concern',
  REQUEST = 'request',
}

export const StoryCategoryMapping = {
  SENSITIVE: StoryCategory.SENSITIVE,
  1: StoryCategory.THANKS,
  2: StoryCategory.QUESTION,
  3: StoryCategory.SUGGESTION_OPINION,
  4: StoryCategory.CONCERN,
  5: StoryCategory.REQUEST,
};

export const StatisticsStoryCategoryMapping = {
  1: StoryCategory.THANKS,
  2: StoryCategory.QUESTION,
  3: StoryCategory.SUGGESTION_OPINION,
  4: StoryCategory.CONCERN,
  5: StoryCategory.REQUEST,
};
