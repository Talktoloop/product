import { UserEntity } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { EditUserNotificationDto } from '../request/dto/edit-user-notifications.dto';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { GooglePlaces } from 'google-places-web';
import { GooglePlaceQueryAutocompleteResponse } from 'google-place-types';
import { FindLocationsByPhraseDTO } from '../request/dto/find-locations-by-phrase.dto';
import * as GeoIp from 'geoip-lite';
import { FindLocationsByCoordinatesDTO } from '../request/dto/find-locations-by-coordinates.dto';
import * as Geocoding from 'reverse-geocoding';
import { ConfigService } from '@nestjs/config';
import { CountryService } from '../../country/service/country.service';
import { UpdateResult } from 'typeorm';
import { ConsentsDto } from '../request/dto/consents.dto';
import { UserConsentRepository } from '../repository/user-consent.repository';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { REGISTRATION_STATUS } from '../../user/constant/registration-status.constant';
import { NotificationService } from '../../notification/service/notification.service';
import { BrevoService } from './brevo.service';
export declare class UserService {
    private readonly userRepository;
    private readonly googlePlaces;
    private readonly geoIp;
    private readonly geocoding;
    private readonly countryService;
    private readonly config;
    private readonly userConsentRepository;
    private readonly airTableUserService;
    private readonly notificationService;
    private readonly brevoService;
    private readonly logger;
    constructor(userRepository: UserRepository, googlePlaces: GooglePlaces, geoIp: GeoIp, geocoding: Geocoding, countryService: CountryService, config: ConfigService, userConsentRepository: UserConsentRepository, airTableUserService: AirTableUserService, notificationService: NotificationService, brevoService: BrevoService);
    saveUser(data: Partial<UserEntity>, moderator?: UserEntity): Promise<UserEntity>;
    checkConsents(data: Partial<UserEntity>, consents?: ConsentsDto): Promise<Partial<UserEntity>>;
    updateUserData(data: Partial<UserEntity>, userId: string, optin_marketing?: boolean, consents?: ConsentsDto, organisationApplicationId?: string, email?: string): Promise<UpdateResult>;
    updateUserNotification(data: EditUserNotificationDto, userId: string): Promise<UpdateResult>;
    migrateUser(oldUser: UserEntity, newUserId: string): Promise<void>;
    findById(id: string, relations?: string[]): Promise<UserEntity>;
    findByEmail(email: string, relations?: string[]): Promise<UserEntity>;
    findUsersFormOrganisationsWithNotificationOn(organisations: Partial<OrganisationEntity>[]): Promise<UserEntity[]>;
    findUsersFormOrganisationsWithRemindersOn(organisations: Partial<OrganisationEntity>[]): Promise<UserEntity[]>;
    checkCountry(ipAddress: string): {
        country: string;
    };
    findLocationsByCoordinates(language: string, params: FindLocationsByCoordinatesDTO): Promise<{
        results: [{
            types: string[];
        }];
    }>;
    findLocationsByPhrase(language: string, data: FindLocationsByPhraseDTO): Promise<GooglePlaceQueryAutocompleteResponse>;
    getUserOrganisationIdByEmail(email: string): Promise<Record<string, string>>;
    updateStatuses(): Promise<Partial<UserEntity>[]>;
    updateLastActivity(userId: string): Promise<void>;
    updateUserAccountStatus(userId: string): Promise<REGISTRATION_STATUS>;
}
