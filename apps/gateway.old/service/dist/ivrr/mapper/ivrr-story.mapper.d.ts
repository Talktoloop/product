import { IvrrStoryDTO } from '@ourloop/shared';
import { StoryEntity } from '../../story/entity/story.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
export declare const ivrrStoryMapper: (story: StoryEntity, reasons?: RejectReasonEntity[]) => IvrrStoryDTO;
