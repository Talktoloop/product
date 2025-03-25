import { faker } from '@faker-js/faker';
import { UserEntity } from '../../src/user/entity/user.entity';
import { ROLE } from '../../src/user/constant/role.constant';
import { getOrganizations } from './organization.mock';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';
import { getDefaultLanguage } from './language.mock';

export const getUserStub = (): UserEntity => {
  const user = new UserEntity();

  user.nickname = faker.internet.userName();
  user.email = faker.internet.email();
  user.notifications = true;

  return user;
};

export const addUsers = async (): Promise<UserEntity[]> => {
  const connection = await getConnection(config);
  const userRepository = connection.getRepository(UserEntity);
  const organizations = await getOrganizations();
  const defaultLanguage = await getDefaultLanguage();
  const operations = [];

  for (const role of Object.values(ROLE)) {
    if (Number.isInteger(role)) {
      for (const organization of organizations) {
        const user = new UserEntity();

        user.id = faker.string.uuid();
        user.organisation_id = organization.id;
        user.email = faker.internet.email();
        user.nickname = faker.internet.userName();
        user.role = Number(role);
        user.languageId = defaultLanguage.id;

        operations.push(userRepository.save(user));
      }
    }
  }

  return Promise.all(operations);
};

export const getUserByOrganizationId = async (
  organizationId: string,
): Promise<UserEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(UserEntity).findOne({
    where: {
      organisation_id: organizationId,
    },
  });
};

export const getRandomUser = (
  users: UserEntity[],
  excluded: string[] = [],
): UserEntity => {
  return getRandomValueWithExcluded(
    users.filter((item) => !excluded.includes(item.id)),
  );
};

export const getUsersByRole = async (role: ROLE): Promise<UserEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(UserEntity).find({
    where: {
      role,
    },
    order: {
      id: 'ASC',
    },
  });
};
