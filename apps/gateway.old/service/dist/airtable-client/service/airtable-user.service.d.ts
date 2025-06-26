import { AirTableUserInterface } from '../interface/airtable-user.interface';
import { UserRepository } from '../../user/repository/user.repository';
import { ConfigService } from '@nestjs/config';
import { OrganisationApplicationRepository } from '../../user/repository/organisation-application.repository';
import { AirTableOrganisationService } from './airtable-organisation.service';
import { AirTableUserRO } from '../response/airtable-user.ro';
import { OrganisationRepository } from '../../organisation/organisation.repository';
export declare class AirTableUserService {
    private readonly userRepository;
    private readonly config;
    private readonly organisationApplicationRepository;
    private readonly airTableOrganisationService;
    private readonly organisationRepository;
    private readonly logger;
    private readonly apiKey;
    private readonly usersUrl;
    private readonly organisationsUrl;
    private axiosInstance;
    constructor(userRepository: UserRepository, config: ConfigService, organisationApplicationRepository: OrganisationApplicationRepository, airTableOrganisationService: AirTableOrganisationService, organisationRepository: OrganisationRepository);
    importUsersToAirtable(): Promise<AirTableUserInterface[]>;
    mapUserToAirTable(users: AirTableUserInterface[], moderatorNickname?: string): {
        fields: any;
    }[];
    postUsersToAirTable(users: {
        fields: AirTableUserInterface;
    }[]): Promise<AirTableUserRO[]>;
    findAndUpdateAirTableOrganisation(airTableUsers: AirTableUserRO[]): Promise<void>;
    updateAirTableApplication(userId: string, airTableUserCellId: string): Promise<void>;
    getAirTableUserData(userId: string): Promise<any>;
    updateAirTableUser(userData: AirTableUserInterface): Promise<void>;
    updateAirTableUsersOrganisationOrApplication(airTableUserId: string, airTableOrganisationId: string, updateOrganisation: boolean): Promise<void>;
    findByEmailAndUpdateId(userEmail: string, newId: string): Promise<void>;
    updateNumberOfUsers(organisationId: string, numberOfUsers: number): Promise<void>;
    syncNumberOfUsersToAirtable(organisationId: string): Promise<void>;
    updateLastActivity(time: Date, userId: string): Promise<void>;
}
