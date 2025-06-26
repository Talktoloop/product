import { Repository } from 'typeorm';
import { OrganisationEntity } from './entity/organisation.entity';
import { ROLE } from '../user/constant/role.constant';
import { OrganisationWithDetails } from './type/organisation-with-details.type';
import { AirTableOrganisationInterface } from '../airtable-client/interface/airtable-organisation.interface';
export declare class OrganisationRepository extends Repository<OrganisationEntity> {
    private readonly logger;
    findAll(): Promise<OrganisationEntity[]>;
    findOrganisationsByPhrase(phrase: string): Promise<OrganisationEntity[]>;
    findOrganisationsByIdsAndStatus(ids: string[]): Promise<OrganisationEntity[]>;
    findByIdOrFail(id: string): Promise<OrganisationEntity>;
    getOrganisationsByRole(role: ROLE): Promise<OrganisationWithDetails[]>;
    findOrganisationsWithNumberOfComments(languageId: number, publicationDuration: number): Promise<Array<{
        organisationId: string;
        organisationName: string;
        storyId: string;
        numberOfComments: number;
        content: string;
        originalLanguageId: number;
    }>>;
    findOriganisationsByPhrases(phrases: string[]): Promise<OrganisationEntity[]>;
    findOrganisationsToAirtable(organisationId?: string): Promise<AirTableOrganisationInterface[]>;
}
