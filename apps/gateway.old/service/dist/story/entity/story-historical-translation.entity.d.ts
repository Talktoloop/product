import { UserEntity } from '../../user/entity/user.entity';
import { StoryTranslationEntity } from './story-translation.entity';
export declare class StoryHistoricalTranslationEntity {
    id: number;
    translationId: number;
    isRecoverable: boolean;
    userId: string;
    content: string;
    createdAt: Date;
    user?: UserEntity;
    translation?: StoryTranslationEntity;
}
