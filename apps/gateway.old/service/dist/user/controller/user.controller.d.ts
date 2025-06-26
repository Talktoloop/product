import { UserProfileRO } from '../response/user-profile.ro';
import { UserEntity } from '../entity/user.entity';
import { UserService } from '../service/user.service';
import { SuccessRO } from '../../common/response/success.ro';
import { EditUserNotificationDto } from '../request/dto/edit-user-notifications.dto';
import { FindLocationsByPhraseDTO } from '../request/dto/find-locations-by-phrase.dto';
import { LocationRO } from '../response/locations.ro';
import { CountryByIpRO } from '../response/county-by-ip.ro';
import { FindLocationsByCoordinatesDTO } from '../request/dto/find-locations-by-coordinates.dto';
import { EditUserDataDto } from '../request/dto/edit-user-data.dto';
import { UserOrganisationRO } from '../response/user-organisation.ro';
import { SubscriptionService } from '../../subscription/service/subscription.service';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { sendInvitationToUserDTO } from '../request/dto/send-invitation-to-user.dto';
import { OrganisationService } from '../../organisation/organisation.service';
export declare class UserController {
    private readonly userService;
    private readonly subscriptionService;
    private readonly airTableUserService;
    private readonly organisationService;
    private readonly logger;
    constructor(userService: UserService, subscriptionService: SubscriptionService, airTableUserService: AirTableUserService, organisationService: OrganisationService);
    profile(user: UserEntity): Promise<UserProfileRO>;
    updateUserData(user: UserEntity, data: EditUserDataDto): Promise<SuccessRO>;
    updateUserNotification(user: UserEntity, data: EditUserNotificationDto): Promise<SuccessRO>;
    findLocationsByCoordinates(language: string, params: FindLocationsByCoordinatesDTO): Promise<any>;
    findLocationsByPhrase(language: string, params: FindLocationsByPhraseDTO): Promise<LocationRO[]>;
    checkCountry(ipAddress: string): Promise<CountryByIpRO>;
    getUserOrganisation(email: string): Promise<UserOrganisationRO>;
    importToAirtable(): Promise<{
        success: boolean;
    }>;
    sendInvitationToUser(data: sendInvitationToUserDTO): Promise<SuccessRO>;
    updateUsersAccountStatus(): Promise<SuccessRO>;
}
