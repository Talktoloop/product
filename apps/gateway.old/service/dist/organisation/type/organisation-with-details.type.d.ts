import { OrganisationEntity } from '../entity/organisation.entity';
export type OrganisationWithDetails = OrganisationEntity & {
    countryCode?: string;
    storiesCount?: number;
    usersCount?: number;
};
