import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionService } from './subscription.service';
import { NotificationService } from '../../notification/service/notification.service';
import { notificationServiceMock } from '../../../test/mocks/notification.service.mock';
import { OrganisationService } from '../../organisation/organisation.service';
import { organisationServiceMock } from '../../../test/mocks/organisation.service.mock';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { organisationRepositoryMock } from '../../../test/mocks/organisation.repository';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { UserRepository } from '../../user/repository/user.repository';
import { userRepositoryMock } from '../../../test/mocks/user.repository.mock';
import { UserTokenRepository } from '../repository/user-token.repository';
import { userTokenRepositoryMock } from '../../../test/mocks/user-token.repository.mock';
import { OrganisationTokenRepository } from '../repository/organisation-token.repository';
import { organisationTokenRepositoryMock } from '../../../test/mocks/organisation-token.repository.mock';
import { SubscriptionApplicationRepository } from '../repository/subscription-application.repository';
import { subscriptionApplicationRepositoryMock } from '../../../test/mocks/subscription-application.repository.mock';

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

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubscriptionService,
        {
          provide: NotificationService,
          useValue: notificationServiceMock,
        },
        {
          provide: OrganisationService,
          useValue: organisationServiceMock,
        },
        {
          provide: OrganisationRepository,
          useValue: organisationRepositoryMock,
        },
        {
          provide: UserRepository,
          useValue: userRepositoryMock,
        },
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
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
          provide: SubscriptionApplicationRepository,
          useValue: subscriptionApplicationRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<SubscriptionService>(SubscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
