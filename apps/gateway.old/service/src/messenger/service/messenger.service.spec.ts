import { Test, TestingModule } from '@nestjs/testing';
import { MessengerService } from './messenger.service';
import { getStoryStub } from '../../../test/entity/story.mock';
import { getMessengerConversationStub } from '../../../test/entity/messanger.mock';
import { getCountryStub } from '../../../test/entity/country.mock';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { LanguageRepository } from '../../language/language.repository';
import { languageRepositoryMock } from '../../../test/mocks/language.repository.mock';
import { CategoryRepository } from '../../category/category.repository';
import { categoryRepositoryMock } from '../../../test/mocks/category.repository';
import { CountryRepository } from '../../country/repository/country.repository';
import { countryRepositoryMock } from '../../../test/mocks/country.repository.mock';
import { MessengerMessageRepository } from '../repository/messenger-message.repository';
import { messengerMessageRepositoryMock } from '../../../test/mocks/messenger-message.repository.mock';
import { StoryConversationService } from '../../story/service/story-conversation.service';
import { conversationServiceMock } from '../../../test/mocks/conversation.service.mock';
import { StoryService } from '../../story/service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { clientProxyMock } from '../../../test/mocks/client-proxy.mock';
import { configMock } from '../../../test/mocks/config.mock';
import { StoryStatus } from '../enum/story-status.enum';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { StoryRecipientService } from '../../story/service/story-recipient.service';
import { storyRecipientRepositoryMock } from '../../../test/mocks/story-recipient.repository.mock';
import { MessageRepository } from '../../sms/repository/message.repository';
import { messageRepositoryMock } from '../../../test/mocks/message.repository.mock';

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
      application: {
        communicationTimeout: 5000,
      },
    };
  },
}));

describe('MessengerService', () => {
  let service: MessengerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessengerService,
        {
          provide: LanguageRepository,
          useValue: languageRepositoryMock,
        },
        {
          provide: CategoryRepository,
          useValue: categoryRepositoryMock,
        },
        {
          provide: CountryRepository,
          useValue: countryRepositoryMock,
        },
        {
          provide: MessengerMessageRepository,
          useValue: messengerMessageRepositoryMock,
        },
        {
          provide: MessageRepository,
          useValue: messageRepositoryMock,
        },
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: SHARED_DI.CLIENT_PROXY,
          useValue: clientProxyMock,
        },
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
        },
        {
          provide: StoryConversationService,
          useValue: conversationServiceMock,
        },
        {
          provide: StoryRecipientService,
          useValue: storyRecipientRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<MessengerService>(MessengerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Is method defined', () => {
    it('sendStoryStatus is defined', () =>
      expect(service.sendStoryStatus).toBeDefined());
  });

  describe('Check if methods work properly', () => {
    const story = getStoryStub({
      channel: CHANNEL_CONSTANTS.MESSENGER,
    });
    const country = getCountryStub();
    const conversation = getMessengerConversationStub({
      countryId: country.id,
    });

    it('sendStoryStatus() does call ClientProxy.send() with the expected parameters', async () => {
      const reason = faker.lorem.sentence();

      jest
        .spyOn(messengerMessageRepositoryMock, 'update')
        .mockReturnValue(new Promise((res) => res(conversation)));

      jest.spyOn(clientProxyMock, 'send').mockImplementationOnce(() =>
        of({
          messages: [],
        }),
      );

      await service.sendStoryStatus(story, StoryStatus.REJECTED, reason);

      expect(clientProxyMock.send).toBeCalledWith(
        { cmd: 'sendStoryStatusFacebookNotification' },
        {
          language: story.conversation?.language?.code,
          senderId: story.recipient?.communicatorId,
          pageId: story.conversation?.serviceNumber,
          messageType: StoryStatus.REJECTED,
          messengerConversationId: story.conversationId,
          reasonText: reason,
        },
      );
    });
  });
});
