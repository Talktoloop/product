import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { ModeratorEntity } from '../entity/moderator.entity';

@EntityRepository(ModeratorEntity)
export class ModeratorRepository extends Repository<ModeratorEntity> {
  async findAll(): Promise<Record<string, string>[]> {
    const moderators = await this.find({
      where: { role: 2 },
    });

    return moderators.map((moderator) => ({
      id: moderator.id,
      email: moderator.email,
      nickname: moderator.nickname || '',
      firstName: moderator.firstName || '',
      lastName: moderator.lastName || '',
      role: moderator.role.toString(),
    }));
  }

  async findById(id: string): Promise<ModeratorEntity> {
    const moderator = await this.findOne({
      where: {
        id: id,
        role: 2,
      },
    });

    return moderator;
  }
}
