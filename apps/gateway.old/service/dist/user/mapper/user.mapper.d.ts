import { UserEntity } from '../entity/user.entity';
import { UserProfileRO } from '../response/user-profile.ro';
import { SubscriptionToken } from '../../subscription/type/subscription-token.type';
export declare const userToUserProfileRO: (user: UserEntity, token: SubscriptionToken) => UserProfileRO;
