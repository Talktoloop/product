import { Test, TestingModule } from '@nestjs/testing';
import { RejectReasonService } from './reject-reason.service';
import { RejectReasonRepository } from '../repository/reject-reason.repository';

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

describe('RejectReasonService', () => {
  let service: RejectReasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RejectReasonService, RejectReasonRepository],
    }).compile();

    service = module.get<RejectReasonService>(RejectReasonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
