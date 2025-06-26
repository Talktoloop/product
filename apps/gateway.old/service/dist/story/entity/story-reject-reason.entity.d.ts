import { StoryEntity } from './story.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
export declare class StoryRejectReasonEntity {
    id?: number;
    storyId: string;
    rejectReasonId: number;
    rejectReasonText: string;
    story?: StoryEntity;
    rejectReason?: RejectReasonEntity;
}
