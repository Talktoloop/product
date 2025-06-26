import { CommentTranslationModeratorService } from '../service/comment-translation-moderator.service';
import { SuccessRO } from '../../common/response/success.ro';
import { RemoveCommentTranslationDto } from '../request/dto/remove-comment-translation.dto';
import { VerifyCommentTranslationDto } from '../request/dto/verify-comment-translation.dto';
import { TranslationRO } from '../../common/response/translation';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import { RetryTranslationDto } from '../../common/dto/retry-translation.dto';
export declare class CommentTranslationModeratorController {
    private readonly commentTranslationModeratorService;
    constructor(commentTranslationModeratorService: CommentTranslationModeratorService);
    removeStoryTranslation(storyId: string, data: RemoveCommentTranslationDto): Promise<SuccessRO>;
    verifyStoryTranslation(storyId: string, data: VerifyCommentTranslationDto): Promise<SuccessRO>;
    getTranslationStatus(commentId: string): Promise<TranslationRO[]>;
    saveTranslation(commentId: string, data: SaveTranslationDto): Promise<SuccessRO>;
    retryStoryTranslation(storyId: string, data: RetryTranslationDto): Promise<SuccessRO>;
}
