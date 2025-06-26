import { StoryModeratorService } from '../service/story-moderator.service';
import { StoryIvrrModeratorRO } from '../response/story-ivrr-moderator.ro';
import { StoryHistoricalTranslationModeratorService } from '../service/story-historical-translation-moderator.service';
import { LanguageService } from '../../language/language.service';
import { StoryConversationService } from '../service/story-conversation.service';
export declare class StoryIVRRModeratorController {
    private readonly storyModeratorService;
    private readonly storyHistoricalTranslationModeratorService;
    private readonly languageService;
    private readonly storyConversationService;
    constructor(storyModeratorService: StoryModeratorService, storyHistoricalTranslationModeratorService: StoryHistoricalTranslationModeratorService, languageService: LanguageService, storyConversationService: StoryConversationService);
    getIvrrStoryDetails(storyId: string, userLanguageId: number): Promise<StoryIvrrModeratorRO>;
}
