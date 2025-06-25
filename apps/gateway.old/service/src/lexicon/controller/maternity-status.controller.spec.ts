import { Test, TestingModule } from '@nestjs/testing';
import { MaternityStatusController } from './maternity-status.controller';
import { MaternityStatusRepository } from '../repository/maternity-status.repository';
import { MaternityStatusService } from '../service/maternity-status.service';

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

describe('Pregnant Controller', () => {
  let controller: MaternityStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaternityStatusController],
      providers: [MaternityStatusRepository, MaternityStatusService],
    }).compile();

    controller = module.get<MaternityStatusController>(
      MaternityStatusController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
