import { Repository } from 'typeorm';
import { CommentTranslationEntity } from '../entity/comment-translation.entity';
export declare class CommentTranslationRepository extends Repository<CommentTranslationEntity> {
    findExistingCommentTranslation(commentId: string, languageId: number): Promise<CommentTranslationEntity>;
}
