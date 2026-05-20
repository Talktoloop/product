import { Test, TestingModule } from '@nestjs/testing';
import { ThematicController } from './thematic.controller';
import { ThematicRepository } from '../repository/thematic.repository';
import { ThematicService } from '../service/thematic.service';

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

describe('Thematic Controller', () => {
  let controller: ThematicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThematicController],
      providers: [ThematicRepository, ThematicService],
    }).compile();

    controller = module.get<ThematicController>(ThematicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
