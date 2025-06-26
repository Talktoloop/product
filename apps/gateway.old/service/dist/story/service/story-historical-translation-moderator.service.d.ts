import { StoryHistoricalTranslationRepository } from '../repository/story-historical-translation.repository';
import { StoryHistoricalTranslationEntity } from '../entity/story-historical-translation.entity';
import { StoryEntity } from '../entity/story.entity';
export declare class StoryHistoricalTranslationModeratorService {
    private readonly storyHistoricalTranslationRepository;
    constructor(storyHistoricalTranslationRepository: StoryHistoricalTranslationRepository);
    findHistoricaloriginalContentForStory(story: StoryEntity, order?: Record<string, string>): Promise<StoryHistoricalTranslationEntity>;
    findOneByIdAndOrder(id: number, order: Record<string, string>, isRecoverable?: boolean): Promise<StoryHistoricalTranslationEntity>;
    contentIsDefined(value: string): boolean;
    save(data: Partial<StoryHistoricalTranslationEntity>): Promise<StoryHistoricalTranslationEntity>;
}
