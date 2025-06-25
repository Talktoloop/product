import { OrganisationEntity } from '../../src/organisation/entity/organisation.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';

export const getOrganizations = async (): Promise<OrganisationEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(OrganisationEntity).find();
};

export const getRandomOrganization = (
  organizations: OrganisationEntity[],
  excluded: string[] = [],
): OrganisationEntity => {
  return getRandomValueWithExcluded(
    organizations.filter((item) => !excluded.includes(item.id)),
  );
};
