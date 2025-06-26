import { NotificationService } from '../../notification/service/notification.service';
import { UserEntity } from '../../user/entity/user.entity';
import { OrganisationService } from '../../organisation/organisation.service';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { ConfigService } from '@nestjs/config';
import { GenerateTokenDTO } from '../request/dto/generate-token.dto';
import { UserRepository } from '../../user/repository/user.repository';
import { UserTokenRepository } from '../repository/user-token.repository';
import { OrganisationTokenRepository } from '../repository/organisation-token.repository';
import { SuccessRO } from '../../common/response/success.ro';
import { SubscriptionTokenInterface } from './../interface/subscription-token.interface';
import { SubscriptionToken } from '../type/subscription-token.type';
import { LibraryResponse } from 'node-mailjet';
import { SubscriptionApplicationRepository } from '../repository/subscription-application.repository';
import { SubscriptionApplicationEntity } from '../entity/subscription-application.entity';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
export declare class SubscriptionService {
    private readonly notificationService;
    private readonly organisationService;
    private readonly organisationRepository;
    private readonly userRepository;
    private readonly config;
    private readonly userTokenRepository;
    private readonly organisationTokenRepository;
    private readonly subscriptionApplicationRepository;
    private readonly airTableUserService;
    private readonly logger;
    constructor(notificationService: NotificationService, organisationService: OrganisationService, organisationRepository: OrganisationRepository, userRepository: UserRepository, config: ConfigService, userTokenRepository: UserTokenRepository, organisationTokenRepository: OrganisationTokenRepository, subscriptionApplicationRepository: SubscriptionApplicationRepository, airTableUserService: AirTableUserService);
    decodeToken(token: string): SubscriptionToken;
    checkIfTokenExpired(expirationTime: number): boolean;
    sendEmailWithSubscriptionRequest(user: UserEntity, access: string): Promise<SuccessRO>;
    sendNotificationWithToken(user: UserEntity, token: string): Promise<LibraryResponse<any>>;
    sendPremiumActivationEmail(ownerId: string, isOrganisation: boolean, token: string): Promise<SuccessRO>;
    saveSubscriptionData(data: GenerateTokenDTO, token: string): Promise<void>;
    generateSubscriptionToken(data: GenerateTokenDTO): Promise<{
        subscriptionToken: SubscriptionTokenInterface;
    }>;
    checkIfTokenExists(token: string, groupType: string): Promise<boolean>;
    getUserSubscriptionToken(userData: UserEntity): Promise<{
        decodedToken: SubscriptionToken;
        token: string;
    }>;
    saveSubscriptionApplication(userId: string, access: string, type: string): Promise<SubscriptionApplicationEntity>;
}
