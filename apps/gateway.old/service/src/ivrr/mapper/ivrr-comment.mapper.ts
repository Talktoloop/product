import { plainToClass } from 'class-transformer';
import { ivrrStoryMapper } from './ivrr-story.mapper';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import { IvrrCommentDTO } from '@ourloop/shared';

export const ivrrCommentMapper = (
  comment: CommentEntity,
  reasons?: RejectReasonEntity[],
): IvrrCommentDTO =>
  plainToClass(IvrrCommentDTO, {
    ...comment,
    story: ivrrStoryMapper(comment.story),
    languageCode: comment.language?.code,
    phone: comment.recipient?.phone,
    reasonIds: reasons
      ? reasons.map((reason) => reason.id)
      : comment.rejectReasons?.map((reason) => reason.rejectReasonId),
  });
