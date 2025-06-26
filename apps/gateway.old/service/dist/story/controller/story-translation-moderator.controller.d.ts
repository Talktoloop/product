import { StoryTranslationModeratorService } from '../service/story-translation-moderator.service';
import { SuccessRO } from '../../common/response/success.ro';
import { RemoveStoryTranslationDto } from '../request/dto/remove-story-translation.dto';
import { VerifyStoryTranslationDto } from '../request/dto/verify-story-translation.dto';
import { TranslationRO } from '../../common/response/translation';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import { RetryTranslationDto } from '../../common/dto/retry-translation.dto';
import { UserEntity } from '../../user/entity/user.entity';
import { StoryService } from '../service/story.service';
export declare class StoryTranslationModeratorController {
    private readonly storyService;
    private readonly storyTranslationModeratorService;
    constructor(storyService: StoryService, storyTranslationModeratorService: StoryTranslationModeratorService);
    removeStoryTranslation(storyId: string, data: RemoveStoryTranslationDto): Promise<SuccessRO>;
    verifyStoryTranslation(storyId: string, data: VerifyStoryTranslationDto): Promise<SuccessRO>;
    getTranslationStatus(storyId: string): Promise<TranslationRO[]>;
    restoreOriginalContent(user: UserEntity, storyId: string): Promise<SuccessRO>;
    saveTranslation(user: UserEntity, storyId: string, data: SaveTranslationDto): Promise<SuccessRO>;
    retryStoryTranslation(storyId: string, data: RetryTranslationDto): Promise<SuccessRO>;
}
