import { Repository } from 'typeorm';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
export declare class StoryTranslationRepository extends Repository<StoryTranslationEntity> {
    private readonly logger;
    getParticularTranslationForStory(storyId: string, languageId: number): Promise<StoryTranslationEntity>;
    getStoriesByPhrase(phrase: string): Promise<StoryTranslationEntity[]>;
    findStoryIdsBySearchTerm(searchTerm: string): Promise<{
        storyId: string;
    }[]>;
}
