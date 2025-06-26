import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
export declare const formatOrganisations: (organisations: OrganisationEntity[]) => (OrganisationEntity & {
    replied: boolean;
    usersCount: number;
})[];
