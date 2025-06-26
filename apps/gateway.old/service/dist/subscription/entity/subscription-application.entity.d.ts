import { UserEntity } from '../../user/entity/user.entity';
export declare class SubscriptionApplicationEntity {
    id: number;
    type: string;
    access: string;
    userId: string;
    timestamp: Date;
    user: UserEntity;
}
