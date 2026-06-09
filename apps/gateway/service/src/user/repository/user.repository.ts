import { DeepPartial, Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { UserEntity } from '../entity/user.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { GET_USERS_FAILED } from '@ourloop/shared';
import { Logger, BadRequestException } from '@nestjs/common';
import { AirTableUserInterface } from '../../airtable-client/interface/airtable-user.interface';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  private readonly logger = new Logger(UserRepository.name);
  async findUsersWithNotificationOn(
    organisations: Partial<OrganisationEntity>[],
  ): Promise<UserEntity[]> {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.organisation', 'organisation')
      .leftJoinAndSelect('user.language', 'language')
      .where('notifications = :notifications', { notifications: 1 })
      .andWhere('organisation_id IN (:...organisations)', {
        organisations: organisations.map((organisation) => organisation.id),
      })
      .getMany();
  }

  async findUsersWithRemindersOn(
    organisations: Partial<OrganisationEntity>[],
  ): Promise<UserEntity[]> {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.organisation', 'organisation')
      .where('reminders = :reminders', { reminders: 1 })
      .andWhere('organisation_id IN (:...organisations)', {
        organisations: organisations.map((organisation) => organisation.id),
      })
      .getMany();
  }

  findById(id: string, relations?: string[]): Promise<UserEntity> {
    if (!id) return;

    return this.findOne({
      where: { id },
      relations: relations ?? [],
    });
  }

  findByCognitoSubId(
    cognitoSubId: string,
    relations?: string[],
  ): Promise<UserEntity> {
    if (!cognitoSubId) return;

    return this.findOne({
      where: { cognitoSubId },
      relations: relations ?? [],
    });
  }

  saveUser(data: DeepPartial<UserEntity>): Promise<UserEntity> {
    return this.save(data);
  }

  async findUsersToAirtable(userId?: string): Promise<AirTableUserInterface[]> {
    let queryBuilder = this.createQueryBuilder('user')
      .select('user.id', 'ID')
      .addSelect('user.nickname', 'Nickname')
      .addSelect('user.email', 'Email')
      .addSelect('user.account_status', 'Account status');

    if (userId) {
      queryBuilder = queryBuilder.where('user.id = :userId', { userId });
    }

    return queryBuilder.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_USERS_FAILED);
    });
  }
}
