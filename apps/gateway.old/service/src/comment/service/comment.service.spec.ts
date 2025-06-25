import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { CommentRepository } from '../repository/comment.repository';
import { CommentVoteRepository } from '../repository/comment-vote.repository';
import { commentVoteRepositoryMock } from '../../../test/mocks/comment-vote.repository.mock';
import { commentRepositoryMock } from '../../../test/mocks/comment.repository.mock';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { CommentRecipientRepository } from '../repository/comment-recipient.repository';
import { commentRecipientRepositoryMock } from '../../../test/mocks/comment-recipient.repository.mock';

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

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        {
          provide: CommentRepository,
          useValue: commentRepositoryMock,
        },
        {
          provide: CommentVoteRepository,
          useValue: commentVoteRepositoryMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: CommentRecipientRepository,
          useValue: commentRecipientRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
