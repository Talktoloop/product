import { Test, TestingModule } from '@nestjs/testing';
import { StorySortingController } from './story-sorting.controller';

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

describe('Sorting Controller', () => {
  let controller: StorySortingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorySortingController],
    }).compile();

    controller = module.get<StorySortingController>(StorySortingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
