import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../repository/user.repository';
import { userRepositoryMock } from '../../../test/mocks/user.repository.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { googlePlacesMock } from '../../../test/mocks/google-places.mock';
import { geoIPMock } from '../../../test/mocks/geo-ip.mock';
import * as geocodingMock from '../../../test/mocks/geocoding.mock';
import { countryServiceMock } from '../../../test/mocks/country.service.mock';
import { CountryService } from '../../country/service/country.service';
import { configMock } from '../../../test/mocks/config.mock';
import { DataSource } from 'typeorm';
import { userConsentRepositoryMock } from '../../../test/mocks/user-consent.repository.mock';
import { UserConsentRepository } from '../repository/user-consent.repository';
import { userTokenRepositoryMock } from '../../../test/mocks/user-token.repository.mock';
import { UserTokenRepository } from '../../subscription/repository/user-token.repository';
import { organisationTokenRepositoryMock } from '../../../test/mocks/organisation-token.repository.mock';
import { OrganisationTokenRepository } from '../../subscription/repository/organisation-token.repository';
import { AuthService } from '../../auth/auth.service';
import { authServiceMock } from '../../../test/mocks/auth.service.mock';
import { SubscriptionService } from '../../subscription/service/subscription.service';
import { subscriptionServiceMock } from '../../../test/mocks/subscription.service.mock';
import { OrganisationApplicationRepository } from '../repository/organisation-application.repository';
import { organisationApplicationRepositoryMock } from '../../../test/mocks/organisation-application.repository.mock';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { airTableUserServiceMock } from '../../../test/mocks/airtable-user.service.mock';
import { NotificationService } from '../../notification/service/notification.service';
import { notificationServiceMock } from '../../../test/mocks/notification.service.mock';

jest.mock('../../config/default', () => ({
  dynamicConfiguration: () => {
    return {
      database: {
        charset: '',
        database: '',
        host: '',
        password: 'root',
        port: 3307,
        type: 'mysql',
        username: '',
      },
    };
  },
}));

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: userRepositoryMock,
        },
        {
          provide: DI_CONSTANTS.GOOGLE_PLACES,
          useValue: googlePlacesMock,
        },
        {
          provide: DI_CONSTANTS.GEO_IP,
          useValue: geoIPMock,
        },
        {
          provide: DI_CONSTANTS.GEOCODING,
          useValue: geocodingMock.geocoding,
        },
        {
          provide: CountryService,
          useValue: countryServiceMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
        {
          provide: UserConsentRepository,
          useValue: userConsentRepositoryMock,
        },
        {
          provide: DataSource,
          useValue: {},
        },
        {
          provide: UserTokenRepository,
          useValue: userTokenRepositoryMock,
        },
        {
          provide: OrganisationTokenRepository,
          useValue: organisationTokenRepositoryMock,
        },
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
        {
          provide: SubscriptionService,
          useValue: subscriptionServiceMock,
        },
        {
          provide: OrganisationApplicationRepository,
          useValue: organisationApplicationRepositoryMock,
        },
        {
          provide: AirTableUserService,
          useValue: airTableUserServiceMock,
        },
        {
          provide: NotificationService,
          useValue: notificationServiceMock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
