import { StoryRecipientEntity } from './../../story/entity/story-recipient.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import { MessageService } from '../service/message.service';
import { getStoryStub } from '../../../test/entity/story.mock';
import { getConversationStub } from '../../../test/entity/conversation.mock';
import { getCountryStub } from '../../../test/entity/country.mock';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { of } from 'rxjs';
import { MessageEntity } from '../../sms/entity/message.entity';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { configMock } from '../../../test/mocks/config.mock';
import { clientProxyMock } from '../../../test/mocks/client-proxy.mock';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { StoryService } from '../../story/service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';
import { textItMock } from '../../../test/mocks/textit.mock';

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

describe('Message Controller', () => {
  let controller: MessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [
        {
          provide: MessageService,
          useValue: messengerServiceMock,
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
          provide: COMMON_DI.TEXTIT,
          useValue: textItMock,
        },
      ],
    }).compile();

    controller = module.get<MessageController>(MessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Check if methods work properly', () => {
    const story = getStoryStub({ channel: CHANNEL_CONSTANTS.SMS });
    const country = getCountryStub();
    const recipient = new StoryRecipientEntity();
    story.recipient = recipient;

    story.conversation = getConversationStub({
      countryId: country.id,
    });

    story.recipient.userWantContact = true;

    const message = new MessageEntity();
    story.conversation.provider = 'smsProvider';

    story.conversation.smsMessages = [message];

    it('checkPhoneAvailability() does call ClientProxy.send() with the expected parameters', async () => {
      jest
        .spyOn(storyServiceMock, 'checkThatStoryExist')
        .mockReturnValue(new Promise((res) => res(story)));

      jest.spyOn(clientProxyMock, 'send').mockImplementationOnce(() => of({}));

      await controller.checkPhoneAvailability(story.id);

      expect(messengerServiceMock.checkPhoneAvailability).toBeCalledWith(
        'smsProvider',
        story,
      );
    });
  });
});
