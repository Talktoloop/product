import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { CommentService } from '../service/comment.service';
import { StoryService } from '../../story/service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { CommentVoteRepository } from '../repository/comment-vote.repository';
import { commentVoteRepositoryMock } from '../../../test/mocks/comment-vote.repository.mock';
import { commentServiceMock } from '../../../test/mocks/comment.service.mock';
import { CommentRecipientRepository } from '../repository/comment-recipient.repository';
import { commentRecipientRepositoryMock } from '../../../test/mocks/comment-recipient.repository.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { configMock } from '../../../test/mocks/config.mock';

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
    pagination: {
      maxLimit: 50,
    },
  },
}));

describe('Comment Controller', () => {
  let controller: CommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [
        {
          provide: CommentService,
          useValue: commentServiceMock,
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: CommentVoteRepository,
          useValue: commentVoteRepositoryMock,
        },
        {
          provide: CommentRecipientRepository,
          useValue: commentRecipientRepositoryMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    controller = module.get<CommentController>(CommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
