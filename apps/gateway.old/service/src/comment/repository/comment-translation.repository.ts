import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CommentTranslationEntity } from '../entity/comment-translation.entity';

@EntityRepository(CommentTranslationEntity)
export class CommentTranslationRepository extends Repository<CommentTranslationEntity> {
  findExistingCommentTranslation(commentId: string, languageId: number) {
    if (!commentId) return;

    return this.findOne({ where: { commentId, languageId } });
  }
}
