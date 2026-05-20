import { Test, TestingModule } from '@nestjs/testing';
import { DifficultyService } from './difficulty.service';
import { DifficultyRepository } from '../repository/difficulty.repository';

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

describe('DifficultyService', () => {
  let service: DifficultyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DifficultyService, DifficultyRepository],
    }).compile();

    service = module.get<DifficultyService>(DifficultyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
