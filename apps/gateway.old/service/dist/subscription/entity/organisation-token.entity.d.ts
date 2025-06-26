import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
export declare class OrganisationTokenEntity {
    id: number;
    token: string;
    organisationId: string;
    createdAt: Date;
    organisation: OrganisationEntity;
}
