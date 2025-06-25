import { Test, TestingModule } from '@nestjs/testing';
import { ThematicService } from './thematic.service';
import { ThematicRepository } from '../repository/thematic.repository';

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

describe('ThematicService', () => {
  let service: ThematicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThematicService, ThematicRepository],
    }).compile();

    service = module.get<ThematicService>(ThematicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
