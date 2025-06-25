import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { UserTokenEntity } from '../entity/user-token.entity';

@EntityRepository(UserTokenEntity)
export class UserTokenRepository extends Repository<UserTokenEntity> {
  async findByToken(token: string): Promise<UserTokenEntity> {
    if (!token) return;

    return this.findOne({
      where: { token },
    });
  }

  async findByUserId(userId: string): Promise<UserTokenEntity> {
    if (!userId) return;

    return this.findOne({
      where: { userId },
    });
  }
}
