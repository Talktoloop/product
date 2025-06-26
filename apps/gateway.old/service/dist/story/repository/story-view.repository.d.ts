import { Repository } from 'typeorm';
import { StoryViewEntity } from '../entity/story-view.entity';
import { StoryEntity } from '../entity/story.entity';
export declare class StoryViewRepository extends Repository<StoryViewEntity> {
    saveViewIfNotExits(story: StoryEntity, hash: string): Promise<boolean>;
}
