import { Test, TestingModule } from '@nestjs/testing';
import { RejectReasonController } from '../controller/reject-reason.controller';
import { RejectReasonRepository } from '../repository/reject-reason.repository';
import { RejectReasonService } from '../service/reject-reason.service';

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

describe('RejectReason Controller', () => {
  let controller: RejectReasonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RejectReasonController],
      providers: [RejectReasonRepository, RejectReasonService],
    }).compile();

    controller = module.get<RejectReasonController>(RejectReasonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
