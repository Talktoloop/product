import { Test, TestingModule } from '@nestjs/testing';
import { CaseManagerService } from '../service/case-manager.service';
import { CaseManagerController } from './case-manager.controller';

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

describe('CaseManagerController', () => {
  let controller: CaseManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaseManagerController],
      providers: [
        {
          provide: CaseManagerService,
          useValue: CaseManagerService,
        },
      ],
    }).compile();

    controller = module.get<CaseManagerController>(CaseManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
