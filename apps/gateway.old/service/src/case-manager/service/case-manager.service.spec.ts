import { Test, TestingModule } from '@nestjs/testing';
import { CaseManagerRepository } from '../repository/case-manager.repository';
import { CaseManagerService } from './case-manager.service';

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

describe('CaseManagerService', () => {
  let service: CaseManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaseManagerService, CaseManagerRepository],
    }).compile();

    service = module.get<CaseManagerService>(CaseManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
