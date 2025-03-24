import { OrganisationEntity } from '../../organisation/entity/organisation.entity';

export const formatOrganisations = (
  organisations: OrganisationEntity[],
): (OrganisationEntity & {
  replied: boolean;
  usersCount: number;
})[] =>
  organisations.map((organisation: OrganisationEntity) => {
    return {
      ...organisation,
      replied: organisation.replied !== null,
      usersCount: organisation.users?.length ?? 0,
      countryCode: organisation?.country?.code ?? null,
      verified: organisation?.verified ?? null,
    };
  });
