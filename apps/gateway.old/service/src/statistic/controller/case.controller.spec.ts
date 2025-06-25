import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Test, TestingModule } from '@nestjs/testing';
import { cacheManagerMock } from '../../../test/mocks/cache.manager.mock';
import { caseServiceMock } from '../../../test/mocks/case.service';
import { CaseService } from '../service/case.service';
import { CaseController } from './case.controller';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';

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

describe('CaseController', () => {
  let controller: CaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseController],
      providers: [
        {
          provide: CaseService,
          useValue: caseServiceMock,
        },
        {
          provide: CACHE_MANAGER,
          useValue: cacheManagerMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    controller = module.get<CaseController>(CaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
