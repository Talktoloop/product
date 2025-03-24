import { Test, TestingModule } from '@nestjs/testing';
import { StoryTranslationModeratorController } from './story-translation-moderator.controller';
import { StoryTranslationModeratorService } from '../service/story-translation-moderator.service';
import { storyTranslationModeratorServiceMock } from '../../../test/mocks/story-translation-moderator.service.mock';
import { StoryService } from '../service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';

jest.mock('../../common/constant/email-templates.constants');
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
  staticConfig: {
    contentLength: {
      min: 5,
      max: 30000,
    },
  },
}));

describe('Story Translation Moderator Controller', () => {
  let controller: StoryTranslationModeratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoryTranslationModeratorController],
      providers: [
        {
          provide: StoryTranslationModeratorService,
          useValue: storyTranslationModeratorServiceMock,
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
      ],
    }).compile();

    controller = module.get<StoryTranslationModeratorController>(
      StoryTranslationModeratorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
