import { StoryEntity } from './story.entity';
export declare class StoryRecipientEntity {
    id: number;
    email: string;
    phone: string;
    nickname: string;
    firstName: string;
    lastName: string;
    genderByUser: string;
    genderByModerator: number;
    ageByUser: string;
    ageByModerator: number;
    difficultyByUser: string;
    difficultyByModerator: number;
    isMinority: boolean;
    communicatorId: string;
    userWantContact: boolean;
    createdAt: Date;
    updatedAt: Date;
    story: StoryEntity;
}
