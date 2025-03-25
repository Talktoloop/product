import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryVoteEntity } from '../entity/story-vote.entity';
import {
  CustomError,
  ADD_VOTE_STORY_ERROR,
  REMOVE_VOTE_STORY_ERROR,
} from '@ourloop/shared';
import { StoryEntity } from '../entity/story.entity';
import { UserEntity } from '../../user/entity/user.entity';

@EntityRepository(StoryVoteEntity)
export class StoryVoteRepository extends Repository<StoryVoteEntity> {
  async saveVoteIfNotExits(
    story: StoryEntity,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    if (!story?.id) return false;

    const exist = await this.findOne({ where: [{ storyId: story.id, hash }] });

    if (!exist) {
      try {
        const entity = new StoryVoteEntity();
        entity.hash = hash;
        entity.story = story;

        if (user) {
          entity.user = user;
        }

        await this.save(entity);
        return true;
      } catch (err) {
        throw new CustomError(ADD_VOTE_STORY_ERROR, err);
      }
    }
    return false;
  }

  async removeVoteIfNotExits(
    story: StoryEntity,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    let where = { storyId: story.id };

    if (user) {
      where = { ...where, ...{ userId: user.id } };
    } else {
      where = { ...where, ...{ hash } };
    }

    try {
      const vote = await this.findOne({ where });
      if (vote) {
        await this.remove(vote);
        return true;
      }
    } catch (err) {
      throw new CustomError(REMOVE_VOTE_STORY_ERROR, err);
    }

    return false;
  }
}
