import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { userServiceMock } from '../../../test/mocks/user.service.mock';
import { UserService } from '../../user/service/user.service';
import { faker } from '@faker-js/faker';
import { getStoryStub } from '../../../test/entity/story.mock';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import { getUserStub } from '../../../test/entity/user.mock';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import * as emailTemplates from '../../common/constant/email-templates.constants';
import { getMailTemplateId } from '../../common/constant/email-templates.constants';
import { notificationServiceMock } from '../../../test/mocks/notification.service.mock';
import { StoryNotificationService } from './story-notification.service';
import { LanguageRepository } from '../../language/language.repository';
import { languageRepositoryMock } from '../../../test/mocks/language.repository.mock';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { StoryRecipientEntity } from '../../story/entity/story-recipient.entity';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';

jest.mock('../../common/constant/email-templates.constants');
jest.mock('../../config/default', () => ({
  dynamicConfiguration: () => {
    return {
      frontend: {
        url: '',
      },
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

describe('StoryNotificationService', () => {
  let service: StoryNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoryNotificationService,
        {
          provide: NotificationService,
          useValue: notificationServiceMock,
        },
        {
          provide: UserService,
          useValue: userServiceMock,
        },
        {
          provide: LanguageRepository,
          useValue: languageRepositoryMock,
        },
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    service = module.get<StoryNotificationService>(StoryNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Is method defined', () => {
    it('sendNotificationsAfterRejectingStory is defined', () =>
      expect(service.sendNotificationsAfterRejectingStory).toBeDefined());
    it('sendNotificationsAfterStoryPublication is defined', () =>
      expect(service.sendNotificationsAfterStoryPublication).toBeDefined());
  });

  describe('Check if methods work properly', () => {
    const story = getStoryStub();
    const firstReason = new RejectReasonEntity();
    const secondReason = new RejectReasonEntity();
    const user = getUserStub();
    const original = new StoryTranslationEntity();
    const translation = new StoryTranslationEntity();
    const originalLanguage = new LanguageEntity();
    const anotherLanguage = new LanguageEntity();
    const recipient = new StoryRecipientEntity();
    const phone = faker.phone.number();
    const providerPhone = faker.phone.number();
    const email = faker.internet.email();

    originalLanguage.code = faker.string.alphanumeric(2);
    anotherLanguage.code = faker.string.alphanumeric(2);

    story.recipient = recipient;
    story.language = originalLanguage;
    story.user = user;
    story.recipient.phone = phone;
    story.recipient.email = email;

    firstReason.id = faker.number.int(1000);
    firstReason.code = faker.lorem.word();

    secondReason.id = faker.number.int(1000);
    secondReason.code = faker.lorem.word();

    original.languageId = originalLanguage.id;
    original.language = originalLanguage;
    original.content = faker.lorem.sentence();

    translation.languageId = anotherLanguage.id;
    translation.language = anotherLanguage;
    translation.content = faker.lorem.sentence();

    story.translations = [original, translation];
    let organisation: OrganisationEntity;
    story.organisations = [];

    for (let index = 0; index < 2; index++) {
      organisation = new OrganisationEntity();
      organisation.id = faker.string.uuid();
      organisation.name = faker.company.name();

      story.organisations.push(organisation);
    }

    Object.defineProperty(emailTemplates, 'getMailTemplateId', jest.fn());

    it('sendNotificationsAfterStoryPublication() does call NotificationService.sendSMS() with the expected parameters', async () => {
      jest
        .spyOn(languageRepositoryMock, 'findOne')
        .mockReturnValue(new Promise((res) => res(originalLanguage)));

      jest
        .spyOn(userServiceMock, 'findUsersFormOrganisationsWithNotificationOn')
        .mockReturnValue(
          new Promise((res) =>
            res([
              {
                name: faker.internet.userName(),
                organisation: faker.company.name(),
                email: faker.internet.email(),
                language: {
                  code: faker.string.alphanumeric(2),
                },
              },
            ]),
          ),
        );

      const message = new MessageEntity();
      const conversation = new StoryConversationEntity();
      const country = new CountryEntity();
      story.conversation = conversation;
      country.code = 'en';
      story.conversation.provider = 'smsProvider';
      story.conversation.serviceNumber = providerPhone;
      story.country = country;
      conversation.smsMessages = [message];
      story.conversation = conversation;

      await service.sendNotificationsAfterStoryPublication({
        ...story,
        recipient: {
          ...story.recipient,
          email: null,
        },
        user: {
          ...story.user,
          email: null,
        },
      });

      expect(notificationServiceMock.sendSMS).toBeCalledWith(
        originalLanguage.code,
        phone,
        providerPhone,
        'PUBLISH_STORY',
        'smsProvider',
        'en',
      );
    });

    it('sendNotificationsAfterStoryPublication() does call NotificationService.sendEmail() with the expected parameters', async () => {
      const users = [];
      let index = 0;

      while (index < 2) {
        users.push({
          nickname: faker.internet.userName(),
          organisation: {
            name: faker.company.name(),
          },
          email: faker.internet.email(),
          language: {
            code: faker.string.alphanumeric(2),
          },
        });

        index++;
      }

      jest.clearAllMocks();

      jest
        .spyOn(userServiceMock, 'findUsersFormOrganisationsWithNotificationOn')
        .mockReturnValue(new Promise((res) => res(users)));

      await service.sendNotificationsAfterStoryPublication(story);

      expect(notificationServiceMock.sendSMS).toBeCalledTimes(0);
      expect(notificationServiceMock.sendEmail).toBeCalledTimes(3);
      expect(emailTemplates.getMailTemplateId).toBeCalledWith(
        story.language.code,
        'PUBLISH_STORY',
      );
      expect(notificationServiceMock.sendEmail).toHaveBeenCalledWith(
        getMailTemplateId(story.language.code, 'PUBLISH_STORY'),
        {
          name: story.user.nickname,
          var_preview: story.translations.find(
            (item) => item.languageId === story.language.id,
          )?.content,
          confirmation_link: `/story/details/${story.id}`,
        },
        {},
        [
          {
            Email: story.recipient.email,
          },
        ],
      );

      index = 0;

      while (index < 2) {
        expect(emailTemplates.getMailTemplateId).toBeCalledWith(
          users[index].language.code,
          'YOUR_ORGANISATION_HAS_BEEN_TAGGED',
        );
        expect(notificationServiceMock.sendEmail).toHaveBeenNthCalledWith(
          index + 2,
          getMailTemplateId(
            users[index].language.code,
            'YOUR_ORGANISATION_HAS_BEEN_TAGGED',
          ),
          {
            name: users[index].nickname,
            organisation_name: users[index].organisation.name,
            story_preview: story.translations[0]?.content,
            confirmation_link: `/story/details/${story.id}`,
          },
          {},
          [
            {
              Email: users[index].email,
            },
          ],
        );

        index++;
      }

      jest.clearAllMocks();

      for (const user of users) {
        user.language.code = anotherLanguage.code;
      }

      jest
        .spyOn(userServiceMock, 'findUsersFormOrganisationsWithNotificationOn')
        .mockReturnValue(new Promise((res) => res(users)));

      await service.sendNotificationsAfterStoryPublication(story);

      index = 0;

      while (index < 2) {
        expect(emailTemplates.getMailTemplateId).toBeCalledWith(
          users[index].language.code,
          'YOUR_ORGANISATION_HAS_BEEN_TAGGED',
        );
        expect(notificationServiceMock.sendEmail).toHaveBeenNthCalledWith(
          index + 2,
          getMailTemplateId(
            users[index].language.code,
            'YOUR_ORGANISATION_HAS_BEEN_TAGGED',
          ),
          {
            name: users[index].nickname,
            organisation_name: users[index].organisation.name,
            story_preview: story.translations[1]?.content,
            confirmation_link: `/story/details/${story.id}`,
          },
          {},
          [
            {
              Email: users[index].email,
            },
          ],
        );

        index++;
      }
    });

    it('sendNotificationsAfterRejectingStory() does call NotificationService.sendSMS() with the expected parameters', async () => {
      jest
        .spyOn(languageRepositoryMock, 'findOne')
        .mockReturnValue(new Promise((res) => res(originalLanguage)));

      const rationale = faker.lorem.sentence();
      const firstReasonText = faker.lorem.sentence();
      const secondReasonText = faker.lorem.sentence();
      const notificationLanguage = faker.string.alphanumeric(2);

      jest.clearAllMocks();

      const message = new MessageEntity();
      story.conversation.provider = 'smsProvider';
      story.conversation.serviceNumber = providerPhone;
      story.conversation.smsMessages = [message];

      const country = new CountryEntity();
      country.code = 'en';
      story.country = country;

      await service.sendNotificationsAfterRejectingStory(
        {
          ...story,
          recipient: {
            ...story.recipient,
            email: null,
          },
          user: {
            ...story.user,
            email: null,
          },
        },
        {
          notificationLanguage,
          reasonTexts: [firstReasonText, secondReasonText],
          rationale,
          reasonIds: [firstReason.id, secondReason.id],
        },
      );

      expect(notificationServiceMock.sendSMS).toBeCalledWith(
        notificationLanguage,
        phone,
        providerPhone,
        'REJECT_STORY',
        'smsProvider',
        'en',
        {
          reasonText: [firstReasonText, secondReasonText].join(', '),
          rationale,
        },
      );
    });

    it('sendNotificationsAfterStoryReject() does call NotificationService.sendEmail() with the expected parameters', async () => {
      const firstReasonText = faker.lorem.sentence();
      const secondReasonText = faker.lorem.sentence();
      const rationale = faker.lorem.sentence();
      const notificationLanguage = faker.string.alphanumeric(2);

      jest.clearAllMocks();

      await service.sendNotificationsAfterRejectingStory(story, {
        notificationLanguage,
        reasonTexts: [firstReasonText, secondReasonText],
        rationale,
        reasonIds: [firstReason.id, secondReason.id],
      });

      expect(emailTemplates.getMailTemplateId).toBeCalledWith(
        notificationLanguage,
        'REJECT_STORY',
      );
      expect(notificationServiceMock.sendEmail).toBeCalledWith(
        getMailTemplateId(notificationLanguage, 'REJECT_STORY'),
        {
          name: story.user.nickname,
          reject_reason: [firstReasonText, secondReasonText].join(', '),
          reject_rationale: rationale,
          app_url: '',
        },
        {},
        [
          {
            Email: story.recipient.email,
          },
        ],
      );

      story.recipient.nickname = null;
      story.user = user;

      await service.sendNotificationsAfterRejectingStory(story, {
        notificationLanguage,
        reasonTexts: [firstReasonText, secondReasonText],
        rationale,
        reasonIds: [firstReason.id, secondReason.id],
      });

      expect(notificationServiceMock.sendEmail).toBeCalledWith(
        getMailTemplateId(notificationLanguage, 'REJECT_STORY'),
        {
          name: story.user.nickname,
          reject_reason: [firstReasonText, secondReasonText].join(', '),
          reject_rationale: rationale,
          app_url: '',
        },
        {},
        [
          {
            Email: story.recipient.email,
          },
        ],
      );
    });
  });
});
