import { Test, TestingModule } from '@nestjs/testing';
import { ConversationController } from './conversation.controller';
import { StoryConversationService } from '../../story/service/story-conversation.service';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { MessageService } from '../service/message.service';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';

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

describe('Conversation Controller', () => {
  let controller: ConversationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConversationController],
      providers: [
        {
          provide: MessageService,
          useValue: {},
        },
        {
          provide: StoryConversationService,
          useValue: {},
        },
        {
          provide: StoryModeratorService,
          useValue: {},
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ConversationController>(ConversationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
