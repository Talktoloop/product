import { Test, TestingModule } from '@nestjs/testing';
import { CommentModeratorController } from './comment-moderator.controller';
import { CommentService } from '../service/comment.service';
import { CommentModeratorService } from '../service/comment-moderator.service';
import { lexiconServiceMock } from '../../../test/mocks/lexicon.service.mock';
import { RejectReasonService } from '../../lexicon/service/reject-reason.service';
import { CommentNotificationService } from '../../notification/service/comment-notification.service';
import { commentNotificationServiceMock } from '../../../test/mocks/comment-notification.service.mock';
import { commentServiceMock } from '../../../test/mocks/comment.service.mock';
import { commentModeratorServiceMock } from '../../../test/mocks/comment-moderator.service.mock';
import { MessengerService } from '../../messenger/service/messenger.service';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';
import { getStoryStub } from '../../../test/entity/story.mock';
import { getCommentStub } from '../../../test/entity/comment.mock';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { IvrrService } from '../../ivrr/service/ivrr.service';
import { ivrrServiceMock } from '../../../test/mocks/ivrr.service.mock';

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
    pagination: {
      maxLimit: 50,
    },
  },
}));

describe('Comment Moderator Controller', () => {
  let controller: CommentModeratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentModeratorController],
      providers: [
        {
          provide: IvrrService,
          useValue: ivrrServiceMock,
        },
        {
          provide: CommentService,
          useValue: commentServiceMock,
        },
        {
          provide: CommentModeratorService,
          useValue: commentModeratorServiceMock,
        },
        {
          provide: RejectReasonService,
          useValue: lexiconServiceMock,
        },
        {
          provide: CommentNotificationService,
          useValue: commentNotificationServiceMock,
        },
        {
          provide: MessengerService,
          useValue: messengerServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CommentModeratorController>(
      CommentModeratorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Is method defined', () => {
    it('rejectComment is defined', () =>
      expect(controller.rejectComment).toBeDefined());
    it('publishComment is defined', () =>
      expect(controller.publishComment).toBeDefined());
  });

  describe('Check if methods work properly', () => {
    const story = getStoryStub();
    const comment = getCommentStub({ storyId: story.id });

    comment.story = story;

    it('publishComment() does call MessengerService.sendOrganizationCommentNotification()', async () => {
      for (const channel of [
        {
          channel: CHANNEL_CONSTANTS.MESSENGER,
          cmd: 'sendCommentFacebookNotification',
        },
        {
          channel: CHANNEL_CONSTANTS.WHATSAPP,
          cmd: 'sendCommentWhatsappNotification',
        },
      ]) {
        comment.story.channel = channel.channel;

        jest.clearAllMocks();

        jest
          .spyOn(commentServiceMock, 'findComment')
          .mockReturnValue(new Promise((res) => res(comment)));

        jest
          .spyOn(commentModeratorServiceMock, 'publishComment')
          .mockReturnValue(
            new Promise((res) =>
              res({
                affected: 1,
              }),
            ),
          );

        await controller.publishComment(comment.id);

        expect(
          messengerServiceMock.sendCommentNotificationToMessenger,
        ).toBeCalledWith(comment, channel.cmd);
      }
    });
  });
});
