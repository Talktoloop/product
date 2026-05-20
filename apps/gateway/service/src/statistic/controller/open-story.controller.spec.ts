import { Test, TestingModule } from '@nestjs/testing';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { OpenStoryService } from '../service/open-story.service';
import { OpenStoryController } from './open-story.controller';
import { cacheManagerMock } from '../../../test/mocks/cache.manager.mock';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { difficultyServiceMock } from '../../../test/mocks/difficulty.service.mock';
import { openStoryServiceMock } from '../../../test/mocks/open-story.service.mock';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { thematicServiceMock } from '../../../test/mocks/thematic.service.mock';
import { OrganisationService } from '../../organisation/organisation.service';
import { organisationServiceMock } from '../../../test/mocks/organisation.service.mock';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { CountryService } from '../../country/service/country.service';
import { countryServiceMock } from '../../../test/mocks/country.service.mock';
import { StoryService } from '../../story/service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { CommentService } from '../../comment/service/comment.service';
import { commentServiceMock } from '../../../test/mocks/comment.service.mock';

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

describe('OpenStoryController', () => {
  let controller: OpenStoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenStoryController],
      providers: [
        {
          provide: OpenStoryService,
          useValue: openStoryServiceMock,
        },
        {
          provide: CACHE_MANAGER,
          useValue: cacheManagerMock,
        },
        {
          provide: DifficultyService,
          useValue: difficultyServiceMock,
        },
        {
          provide: ThematicService,
          useValue: thematicServiceMock,
        },
        {
          provide: OrganisationService,
          useValue: organisationServiceMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: CountryService,
          useValue: countryServiceMock,
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: CommentService,
          useValue: commentServiceMock,
        },
      ],
    }).compile();

    controller = module.get<OpenStoryController>(OpenStoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
