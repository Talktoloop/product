import { AirTableOrganisationInterface } from '../interface/airtable-organisation.interface';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { ConfigService } from '@nestjs/config';
import { AirTableOrganisationRO } from '../response/airtable-organisation.ro';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
export declare class AirTableOrganisationService {
    private readonly config;
    private readonly organisationRepository;
    private readonly logger;
    private readonly apiKey;
    private readonly organisationsUrl;
    private readonly countriesUrl;
    private axiosInstance;
    constructor(config: ConfigService, organisationRepository: OrganisationRepository);
    importOrganisationsToAirtable(): Promise<AirTableOrganisationInterface[]>;
    mapOrganisationToAirTable(organisations: AirTableOrganisationInterface[]): Promise<{
        fields: AirTableOrganisationInterface;
    }[]>;
    mapCountryNameToAirTableId(countryName: string): Promise<string[]>;
    postOrganisationsToAirTable(organisations: Record<string, any>): Promise<AirTableOrganisationRO[]>;
    getAirTableOrgnisationCellId(organisationId: string): Promise<string>;
    updateNumberOfStories(organisationId: string, numberOfStories: number): Promise<void>;
    syncNumberOfStoriesToAirtable(organisations: OrganisationEntity[]): Promise<void>;
}
