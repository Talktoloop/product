import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
export declare class StoryRecipientService {
    private readonly storyRecipientRepository;
    constructor(storyRecipientRepository: StoryRecipientRepository);
    findLastEntryByCommunicatorId(senderId: string, relations?: string[]): Promise<StoryRecipientEntity>;
}
