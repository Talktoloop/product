import { plainToClass } from 'class-transformer';
import { IvrrStoryDTO } from '@ourloop/shared';
import { StoryEntity } from '../../story/entity/story.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';

export const ivrrStoryMapper = (
  story: StoryEntity,
  reasons?: RejectReasonEntity[],
): IvrrStoryDTO => {
  return plainToClass(IvrrStoryDTO, {
    ...story,
    conversation: {
      shortCodeNumber: story.conversation?.serviceNumber,
    },
    phone: story.recipient?.phone,
    languageCode: story.language?.code,
    reasonIds: reasons
      ? reasons.map((reason) => reason.id)
      : story.rejectReasons?.map((reason) => reason.rejectReasonId),
  });
};
