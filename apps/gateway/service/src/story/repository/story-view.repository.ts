import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryViewEntity } from '../entity/story-view.entity';
import { CustomError, ADD_VIEW_ERROR } from '@ourloop/shared';
import { StoryEntity } from '../entity/story.entity';

@EntityRepository(StoryViewEntity)
export class StoryViewRepository extends Repository<StoryViewEntity> {
  async saveViewIfNotExits(story: StoryEntity, hash: string): Promise<boolean> {
    if (!story?.id) return false;

    const exist = await this.findOne({ where: [{ storyId: story.id, hash }] });
    if (!exist) {
      try {
        const entity = new StoryViewEntity();
        entity.hash = hash;
        entity.story = story;

        await this.save(entity);
        return true;
      } catch (err) {
        throw new CustomError(ADD_VIEW_ERROR, err);
      }
    }
    return false;
  }
}
