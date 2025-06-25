import { addStory } from '../entity/story.mock';
import { addComment } from '../entity/comment.mock';
import { STORY_STATUS, COMMENT_STATUS } from '@ourloop/shared';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { CommentEntity } from '../../src/comment/entity/comment.entity';
import { addUsers } from '../entity/user.mock';
import { UserEntity } from '../../src/user/entity/user.entity';

export const initializeDataset = async (): Promise<{
  stories: StoryEntity[];
  comments: CommentEntity[];
  users: UserEntity[];
}> => {
  const operations = [];
  const comments = [];

  for (const status of Object.values(STORY_STATUS)) {
    operations.push(addStory({ status }));
  }

  operations.push(addStory({ status: STORY_STATUS.PENDING_TRANSLATION }));

  const stories = await Promise.all(operations);

  for (const status of Object.values(COMMENT_STATUS)) {
    comments.push(addComment({ storyId: stories[10].id, status }));
  }

  return {
    stories,
    comments: await Promise.all(comments),
    users: await addUsers(),
  };
};
