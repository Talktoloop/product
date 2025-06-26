import { Repository } from 'typeorm';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
export declare class StoryRecipientRepository extends Repository<StoryRecipientEntity> {
    private readonly logger;
    findDataToExport(): Promise<(StoryRecipientEntity & {
        storyId: string;
    })[]>;
    findLastEntryByCommunicatorId(communicatorId: string, relations?: string[]): Promise<StoryRecipientEntity>;
    findStoryIdsByMinority(isMinority: boolean): Promise<{
        storyId: string;
    }[]>;
}
