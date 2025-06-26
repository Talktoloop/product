import { StoryEntity } from '../../story/entity/story.entity';
export declare class CategoryEntity {
    id: number;
    code: string;
    order: number;
    stories: StoryEntity[];
    count: number;
}
