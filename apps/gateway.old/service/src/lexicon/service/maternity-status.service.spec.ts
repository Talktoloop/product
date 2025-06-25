import { Test, TestingModule } from '@nestjs/testing';
import { MaternityStatusService } from './maternity-status.service';
import { MaternityStatusRepository } from '../repository/maternity-status.repository';

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

describe('MaternityStatusService', () => {
  let service: MaternityStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaternityStatusService, MaternityStatusRepository],
    }).compile();

    service = module.get<MaternityStatusService>(MaternityStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
