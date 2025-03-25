import { Test, TestingModule } from '@nestjs/testing';
import { DifficultyController } from '../controller/difficulty.controller';
import { DifficultyRepository } from '../repository/difficulty.repository';
import { DifficultyService } from '../service/difficulty.service';
import { difficultyServiceMock } from '../../../test/mocks/difficulty.service.mock';
import { ThematicService } from '../service/thematic.service';
import { thematicServiceMock } from '../../../test/mocks/thematic.service.mock';

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

describe('Difficulty Controller', () => {
  let controller: DifficultyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DifficultyController],
      providers: [
        DifficultyRepository,
        {
          provide: DifficultyService,
          useValue: difficultyServiceMock,
        },
        {
          provide: ThematicService,
          useValue: thematicServiceMock,
        },
      ],
    }).compile();

    controller = module.get<DifficultyController>(DifficultyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
