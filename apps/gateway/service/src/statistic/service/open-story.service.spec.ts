import { Test, TestingModule } from '@nestjs/testing';
import { OpenStoryForStoryRepository } from '../repository/open-story-for-story.repository';
import { OpenStoryForCommentRepository } from '../repository/open-story-for-comment.repository';
import { OpenStoryForCategoryRepository } from '../repository/open-story-for-category.repository';
import { OpenStoryService } from './open-story.service';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { difficultyServiceMock } from '../../../test/mocks/difficulty.service.mock';
import { openStoryForCategoryRepositoryMock } from '../../../test/mocks/open-story-for-category.repository.mock';
import { openStoryForCommentRepositoryMock } from '../../../test/mocks/open-story-for-comment.repository.mock';
import { openStoryForStoryRepositoryMock } from '../../../test/mocks/open-story-for-story.repository.mock';
import { CategoryService } from '../../category/category.service';
import { categoryServiceMock } from '../../../test/mocks/category.service.mock';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { thematicServiceMock } from '../../../test/mocks/thematic.service.mock';
import { CaseRepository } from '../repository/case.repository';
import { caseRepositoryMock } from '../../../test/mocks/case.repository';
import { CategoryRepository } from '../../category/category.repository';
import { categoryRepositoryMock } from '../../../test/mocks/category.repository';

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

describe('OpenStoryService', () => {
  let service: OpenStoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OpenStoryService,
        {
          provide: DifficultyService,
          useValue: difficultyServiceMock,
        },
        {
          provide: CategoryService,
          useValue: categoryServiceMock,
        },
        {
          provide: OpenStoryForStoryRepository,
          useValue: openStoryForStoryRepositoryMock,
        },
        {
          provide: OpenStoryForCommentRepository,
          useValue: openStoryForCommentRepositoryMock,
        },
        {
          provide: OpenStoryForCategoryRepository,
          useValue: openStoryForCategoryRepositoryMock,
        },
        {
          provide: ThematicService,
          useValue: thematicServiceMock,
        },
        {
          provide: CaseRepository,
          useValue: caseRepositoryMock,
        },
        {
          provide: CategoryRepository,
          useValue: categoryRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<OpenStoryService>(OpenStoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
