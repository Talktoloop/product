import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { MessageRepository } from '../repository/message.repository';
import { LanguageRepository } from '../../language/language.repository';
import { StoryService } from '../../story/service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { storyModeratorServiceMock } from '../../../test/mocks/story-moderator.service.mock';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { clientProxyMock } from '../../../test/mocks/client-proxy.mock';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { twilioMock } from '../../../test/mocks/twilio.mock';
import * as twilio from 'twilio';

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

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessageService,
        {
          provide: MessageRepository,
          useValue: {},
        },
        {
          provide: LanguageRepository,
          useValue: {},
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: StoryModeratorService,
          useValue: storyModeratorServiceMock,
        },
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
        },
        {
          provide: SHARED_DI.CLIENT_PROXY,
          useValue: clientProxyMock,
        },
        {
          provide: twilio.Twilio,
          useValue: twilioMock,
        },
      ],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
