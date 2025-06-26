import { Repository } from 'typeorm';
import { UserTokenEntity } from '../entity/user-token.entity';
export declare class UserTokenRepository extends Repository<UserTokenEntity> {
    findByToken(token: string): Promise<UserTokenEntity>;
    findByUserId(userId: string): Promise<UserTokenEntity>;
}
