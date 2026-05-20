import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { faker } from '@faker-js/faker';
import { getStoryStub } from '../../../test/entity/story.mock';
import { getCommentStub } from '../../../test/entity/comment.mock';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import { getUserStub } from '../../../test/entity/user.mock';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import * as emailTemplates from '../../common/constant/email-templates.constants';
import { getMailTemplateId } from '../../common/constant/email-templates.constants';
import { notificationServiceMock } from '../../../test/mocks/notification.service.mock';
import { CommentNotificationService } from './comment-notification.service';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { clientProxyMock } from '../../../test/mocks/client-proxy.mock';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { MessageService } from '../../sms/service/message.service';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';
import { CommentRecipientEntity } from '../../comment/entity/comment-recipient.entity';

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

describe('CommentNotificationService', () => {
  let service: CommentNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentNotificationService,
        {
          provide: MessageService,
          useValue: messengerServiceMock,
        },
        {
          provide: NotificationService,
          useValue: notificationServiceMock,
        },
        {
          provide: SHARED_DI.CLIENT_PROXY,
          useValue: clientProxyMock,
        },
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    service = module.get<CommentNotificationService>(
      CommentNotificationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Is method defined', () => {
    it('sendNotificationsAfterRejectingComment is defined', () =>
      expect(service.sendNotificationsAfterRejectingComment).toBeDefined());
    it('sendNotificationsAfterCommentPublication is defined', () =>
      expect(service.sendNotificationsAfterCommentPublication).toBeDefined());
  });

  describe('Check if methods work properly', () => {
    const story = getStoryStub();
    const user = getUserStub();
    const firstReason = new RejectReasonEntity();
    const secondReason = new RejectReasonEntity();
    const translation = new CommentTranslationEntity();
    const language = new LanguageEntity();
    const recipient = new CommentRecipientEntity();
    const phone = faker.phone.number();
    const comment = getCommentStub({
      storyId: story.id,
      userId: user.id,
    });
    comment.recipient = recipient;
    language.id = faker.number.int(1000);
    language.code = faker.string.alphanumeric(2);
    comment.language = language;
    comment.user = user;

    comment.recipient.phone = phone;
    comment.recipient.email = faker.internet.email();

    translation.languageId = language.id;
    translation.content = faker.lorem.sentence();

    comment.translations = [translation];

    firstReason.id = faker.number.int(1000);
    firstReason.code = faker.lorem.word();

    secondReason.id = faker.number.int(1000);
    secondReason.code = faker.lorem.word();

    Object.defineProperty(emailTemplates, 'getMailTemplateId', jest.fn());

    it('sendNotificationsAfterCommentPublication() does call NotificationService.sendEmail() with the expected parameters', async () => {
      jest.clearAllMocks();

      await service.sendNotificationsAfterCommentPublication(comment);

      expect(notificationServiceMock.sendEmail).toBeCalledTimes(1);
      expect(notificationServiceMock.sendSMS).toBeCalledTimes(0);
      expect(emailTemplates.getMailTemplateId).toBeCalledWith(
        comment.language.code,
        'PUBLISH_REPLY',
      );
      expect(notificationServiceMock.sendEmail).toHaveBeenCalledWith(
        getMailTemplateId(comment.language.code, 'PUBLISH_REPLY'),
        {
          name: comment.user.nickname,
          reply_preview: comment.translations.find(
            (item) => item.languageId === comment.language.id,
          )?.content,
          confirmation_link: `/story/details/${comment.storyId}`,
        },
        {},
        [
          {
            Email: comment.recipient.email,
          },
        ],
      );

      comment.recipient.email = null;
      comment.recipient.nickname = undefined;

      await service.sendNotificationsAfterCommentPublication(comment);

      expect(notificationServiceMock.sendSMS).toBeCalledTimes(0);
      expect(emailTemplates.getMailTemplateId).toBeCalledWith(
        comment.language.code,
        'PUBLISH_REPLY',
      );
      expect(notificationServiceMock.sendEmail).toHaveBeenCalledWith(
        getMailTemplateId(comment.language.code, 'PUBLISH_REPLY'),
        {
          name: comment.user.nickname,
          reply_preview: comment.translations.find(
            (item) => item.languageId === comment.language.id,
          )?.content,
          confirmation_link: `/story/details/${comment.storyId}`,
        },
        {},
        [
          {
            Email: comment.user.email,
          },
        ],
      );
    });

    it('sendNotificationsAfterCommentReject() does call NotificationService.sendEmail() with the expected parameters', async () => {
      const rationale = faker.lorem.sentence();
      const firstReasonText = faker.lorem.sentence();
      const secondReasonText = faker.lorem.sentence();
      const notificationLanguage = faker.string.alphanumeric(2);

      comment.recipient.nickname = faker.internet.userName();
      comment.recipient.email = faker.internet.email();

      jest.clearAllMocks();

      await service.sendNotificationsAfterRejectingComment(comment, {
        notificationLanguage,
        reasonTexts: [firstReasonText, secondReasonText],
        rationale,
        reasonIds: [firstReason.id, secondReason.id],
      });

      expect(notificationServiceMock.sendSMS).toBeCalledTimes(0);
      expect(notificationServiceMock.sendEmail).toBeCalledTimes(1);
      expect(emailTemplates.getMailTemplateId).toBeCalledWith(
        notificationLanguage,
        'REJECT_REPLY',
      );
      expect(notificationServiceMock.sendEmail).toHaveBeenCalledWith(
        getMailTemplateId(notificationLanguage, 'REJECT_REPLY'),
        {
          name: comment.user.nickname,
          reject_reason: [firstReasonText, secondReasonText].join(', '),
          reject_rationale: rationale,
          confirmation_link: `/story/details/${comment.storyId}`,
        },
        {},
        [
          {
            Email: comment.recipient.email,
          },
        ],
      );

      comment.recipient.email = null;
      comment.recipient.nickname = undefined;

      await service.sendNotificationsAfterRejectingComment(comment, {
        notificationLanguage,
        reasonTexts: [firstReasonText, secondReasonText],
        rationale,
        reasonIds: [firstReason.id, secondReason.id],
      });

      expect(emailTemplates.getMailTemplateId).toBeCalledWith(
        notificationLanguage,
        'REJECT_REPLY',
      );
      expect(notificationServiceMock.sendSMS).toBeCalledTimes(0);
      expect(notificationServiceMock.sendEmail).toHaveBeenCalledWith(
        getMailTemplateId(notificationLanguage, 'REJECT_REPLY'),
        {
          name: comment.user.nickname,
          reject_reason: [firstReasonText, secondReasonText].join(', '),
          reject_rationale: rationale,
          confirmation_link: `/story/details/${comment.storyId}`,
        },
        {},
        [
          {
            Email: comment.user.email,
          },
        ],
      );
    });
  });
});
