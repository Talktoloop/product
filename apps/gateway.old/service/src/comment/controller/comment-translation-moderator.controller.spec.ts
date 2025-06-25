import { Test, TestingModule } from '@nestjs/testing';
import { CommentTranslationModeratorController } from './comment-translation-moderator.controller';
import { CommentTranslationModeratorService } from '../service//comment-translation-moderator.service';
import { commentTranslationModeratorServiceMock } from '../../../test/mocks/comment-translation-moderator.service.mock';

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

describe('Comment Translation Moderator Controller', () => {
  let controller: CommentTranslationModeratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentTranslationModeratorController],
      providers: [
        {
          provide: CommentTranslationModeratorService,
          useValue: commentTranslationModeratorServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CommentTranslationModeratorController>(
      CommentTranslationModeratorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
