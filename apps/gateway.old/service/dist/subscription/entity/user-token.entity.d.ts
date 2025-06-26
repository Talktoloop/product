import { UserEntity } from '../../user/entity/user.entity';
export declare class UserTokenEntity {
    id: number;
    token: string;
    userId: string;
    createdAt: Date;
    user: UserEntity;
}
