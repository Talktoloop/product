import { Test, TestingModule } from '@nestjs/testing';
import { StoryModeratorController } from './story-moderator.controller';
import { StoryService } from '../service/story.service';
import { StoryModeratorService } from '../service/story-moderator.service';
import { lexiconServiceMock } from '../../../test/mocks/lexicon.service.mock';
import { RejectReasonService } from '../../lexicon/service/reject-reason.service';
import { StoryNotificationService } from '../../notification/service/story-notification.service';
import { storyNotificationServiceMock } from '../../../test/mocks/story-notification.service.mock';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { storyModeratorServiceMock } from '../../../test/mocks/story-moderator.service.mock';
import { clientProxyMock } from '../../../test/mocks/client-proxy.mock';
import { MessengerService } from '../../messenger/service/messenger.service';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { CaseManagerService } from '../../case-manager/service/case-manager.service';
import { caseManagerServiceMock } from '../../../test/mocks/case-manager.service.mock';
import { IvrrService } from '../../ivrr/service/ivrr.service';
import { ivrrServiceMock } from '../../../test/mocks/ivrr.service.mock';
import { storyHistoricalTranslationModeratorServiceMock } from '../../../test/mocks/story-historial-translation-moderator.service.mock';
import { StoryHistoricalTranslationModeratorService } from '../service/story-historical-translation-moderator.service';
import { storyTranslationModeratorServiceMock } from '../../../test/mocks/story-translation-moderator.service.mock';
import { StoryTranslationModeratorService } from '../service/story-translation-moderator.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { LanguageService } from '../../language/language.service';
import { messageServiceMock } from '../../../test/mocks/message.service.mock';
import { MessageService } from '../../sms/service/message.service';

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
    pagination: {
      maxLimit: 50,
    },
  },
}));

describe('Story Moderator Controller', () => {
  let controller: StoryModeratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoryModeratorController],
      providers: [
        {
          provide: IvrrService,
          useValue: ivrrServiceMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: CaseManagerService,
          useValue: caseManagerServiceMock,
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: MessageService,
          useValue: messageServiceMock,
        },
        {
          provide: StoryTranslationModeratorService,
          useValue: storyTranslationModeratorServiceMock,
        },
        {
          provide: StoryHistoricalTranslationModeratorService,
          useValue: storyHistoricalTranslationModeratorServiceMock,
        },
        {
          provide: StoryModeratorService,
          useValue: storyModeratorServiceMock,
        },
        {
          provide: RejectReasonService,
          useValue: lexiconServiceMock,
        },
        {
          provide: StoryNotificationService,
          useValue: storyNotificationServiceMock,
        },
        {
          provide: SHARED_DI.CLIENT_PROXY,
          useValue: clientProxyMock,
        },
        {
          provide: MessengerService,
          useValue: messengerServiceMock,
        },
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    controller = module.get<StoryModeratorController>(StoryModeratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Is method defined', () => {
    it('rejectStory is defined', () =>
      expect(controller.rejectStory).toBeDefined());
    it('publishStory is defined', () =>
      expect(controller.publishStory).toBeDefined());
    it('checkPhoneAvailability is defined', () =>
      expect(controller.publishStory).toBeDefined());
  });
});
