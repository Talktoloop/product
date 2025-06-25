import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { userServiceMock } from '../../../test/mocks/user.service.mock';
import { UserService } from '../service/user.service';
import { subscriptionServiceMock } from '../../../test/mocks/subscription.service.mock';
import { SubscriptionService } from '../../subscription/service/subscription.service';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { airTableUserServiceMock } from '../../../test/mocks/airtable-user.service.mock';
import { organisationServiceMock } from '../../../test/mocks/organisation.service.mock';
import { OrganisationService } from '../../organisation/organisation.service';

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

describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: userServiceMock,
        },
        {
          provide: OrganisationService,
          useValue: organisationServiceMock,
        },
        {
          provide: SubscriptionService,
          useValue: subscriptionServiceMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
        {
          provide: AirTableUserService,
          useValue: airTableUserServiceMock,
        },
      ],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
