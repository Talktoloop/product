import { UpdateResult, DeleteResult } from 'typeorm';
import { CommentRepository } from '../repository/comment.repository';
import { CommentTranslationRepository } from '../repository/comment-translation.repository';
import { VerifyCommentTranslationDto } from '../request/dto/verify-comment-translation.dto';
import { CommentEntity } from '../entity/comment.entity';
import { SaveTranslationDto } from '../../common/dto/save-translation.dto';
import { CommentTranslationEntity } from '../entity/comment-translation.entity';
import { LanguageService } from '../../language/language.service';
import { CommentService } from './comment.service';
export declare class CommentTranslationModeratorService {
    private readonly commentRepository;
    private readonly commentTranslationRepository;
    private readonly languageService;
    private readonly commentService;
    constructor(commentRepository: CommentRepository, commentTranslationRepository: CommentTranslationRepository, languageService: LanguageService, commentService: CommentService);
    retryTranslation(commentId: string, languageCode: string): Promise<boolean>;
    saveTranslationToRepository(translation: CommentTranslationEntity): Promise<CommentTranslationEntity>;
    saveTranslation({ language, content }: SaveTranslationDto, commentId: string): Promise<CommentTranslationEntity>;
    getTranslations(commentId: string): Promise<CommentEntity>;
    removeCommentTranslation(commentId: string, code: string): Promise<DeleteResult>;
    setTranslationAsVerified(commentId: string, data: VerifyCommentTranslationDto): Promise<UpdateResult>;
}
