import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import {
  CustomError,
  ADD_VOTE_ERROR,
  REMOVE_VOTE_COMMENT_ERROR,
} from '@ourloop/shared';
import { CommentVoteEntity } from '../entity/comment-vote.entity';
import { CommentEntity } from '../entity/comment.entity';
import { UserEntity } from '../../user/entity/user.entity';

@EntityRepository(CommentVoteEntity)
export class CommentVoteRepository extends Repository<CommentVoteEntity> {
  async saveVoteIfNotExits(
    comment: CommentEntity,
    hash: string,
    user: UserEntity,
  ): Promise<boolean> {
    if (!comment?.id) return false;

    const exist = await this.findOne({
      where: [{ commentId: comment.id, hash }],
    });
    if (!exist) {
      try {
        const entity = new CommentVoteEntity();
        entity.hash = hash;
        entity.comment = comment;

        if (user) {
          entity.user = user;
        }

        await this.save(entity);
        return true;
      } catch (err) {
        throw new CustomError(ADD_VOTE_ERROR, err);
      }
    }
    return false;
  }

  async removeVoteIfNotExits(
    comment: CommentEntity,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    let where = { commentId: comment.id };

    if (user) {
      where = { ...where, ...{ userId: user.id } };
    } else {
      where = { ...where, ...{ hash } };
    }

    try {
      const vote = await this.findOne({ where });
      if (vote) {
        await this.remove(vote);
        return true;
      }
    } catch (err) {
      throw new CustomError(REMOVE_VOTE_COMMENT_ERROR, err);
    }

    return false;
  }
}
