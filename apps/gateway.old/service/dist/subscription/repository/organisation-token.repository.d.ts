import { Repository } from 'typeorm';
import { OrganisationTokenEntity } from '../entity/organisation-token.entity';
export declare class OrganisationTokenRepository extends Repository<OrganisationTokenEntity> {
    findByToken(token: string): Promise<OrganisationTokenEntity>;
    findByOrganisationId(organisationId: string): Promise<OrganisationTokenEntity>;
}
