import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from '../service/subscription.service';
import { subscriptionServiceMock } from '../../../test/mocks/subscription.service.mock';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { UserService } from '../../user/service/user.service';
import { userServiceMock } from '../../../test/mocks/user.service.mock';

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

describe('SubscriptionController', () => {
  let controller: SubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [
        { provide: SubscriptionService, useValue: subscriptionServiceMock },
        { provide: UserService, useValue: userServiceMock },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    controller = module.get<SubscriptionController>(SubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
