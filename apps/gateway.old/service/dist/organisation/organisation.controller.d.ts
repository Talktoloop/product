import { OrganisationService } from './organisation.service';
import { OrganisationRO } from './response/organisation.ro';
import { CreateOrganisationDto } from './request/dto/create-organisation.dto';
import { IdRo } from './response/id.ro';
import { SuccessRO } from '../common/response/success.ro';
import { LanguageService } from '../language/language.service';
import { UserEntity } from '../user/entity/user.entity';
import { CountryService } from '../country/service/country.service';
import { LinkUsersToOrganisationsDTO } from './request/dto/link-users-to-organisations.dto';
import { StoryService } from '../story/service/story.service';
import { LinkedUsersToOrganisationsRO } from './response/linked-users-to-organisations.ro';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';
export declare class OrganisationController {
    private readonly organisationService;
    private readonly languageService;
    private readonly countryService;
    private readonly storyService;
    private readonly airTableOrganisationService;
    constructor(organisationService: OrganisationService, languageService: LanguageService, countryService: CountryService, storyService: StoryService, airTableOrganisationService: AirTableOrganisationService);
    getListOfOrganisations(user: UserEntity): Promise<OrganisationRO[]>;
    linkUsersToOrganisations(user: UserEntity, data: LinkUsersToOrganisationsDTO): Promise<LinkedUsersToOrganisationsRO>;
    createOrganisation(user: UserEntity, body: CreateOrganisationDto): Promise<IdRo>;
    findOrganisationsAndSendNotificationAboutUnansweredStories(): Promise<SuccessRO>;
    importToAirtable(): Promise<{
        success: boolean;
    }>;
}
