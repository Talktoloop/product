import { plainToClass } from 'class-transformer';
import { OrganisationRO } from '../response/organisation.ro';
import { OrganisationWithDetails } from '../type/organisation-with-details.type';

export const organisationsMapper = (
  organisations: OrganisationWithDetails[],
): OrganisationRO[] => {
  return organisations.map((organisation: OrganisationWithDetails) =>
    plainToClass(OrganisationRO, organisation),
  );
};
