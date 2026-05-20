import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';
import { categoryServiceMock } from '../../test/mocks/category.service.mock';
import { ThematicService } from '../lexicon/service/thematic.service';
import { thematicServiceMock } from '../../test/mocks/thematic.service.mock';

jest.mock('../config/default', () => ({
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

describe('Category Controller', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        CategoryRepository,
        {
          provide: CategoryService,
          useValue: categoryServiceMock,
        },
        {
          provide: ThematicService,
          useValue: thematicServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
