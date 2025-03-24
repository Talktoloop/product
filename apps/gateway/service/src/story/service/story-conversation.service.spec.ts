import { Test, TestingModule } from '@nestjs/testing';
import { StoryConversationService } from './story-conversation.service';
import { StoryConversationRepository } from '../repository/story-conversation.repository';
import { storyConversationRepositoryMock } from '../../../test/mocks/story-conversation.repository.mock';

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

describe('StoryConversationService', () => {
  let service: StoryConversationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoryConversationService,
        {
          provide: StoryConversationRepository,
          useValue: storyConversationRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<StoryConversationService>(StoryConversationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
