import { Inject, Injectable, Logger } from '@nestjs/common';
import { CommentEntity } from '../../comment/entity/comment.entity';
import {
  getMailTemplateId,
  USER_TEMPLATES,
} from '../../common/constant/email-templates.constants';
import { prepareNotificationData, prepareURL } from '../../common/helpers';
import { NotificationService } from './notification.service';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { timeout } from 'rxjs/operators';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { LibraryResponse } from 'node-mailjet';
import { MessageService } from '../../sms/service/message.service';

@Injectable()
export class CommentNotificationService {
  private readonly logger = new Logger(CommentNotificationService.name);

  constructor(
    private readonly notificationService: NotificationService,
    @Inject(SHARED_DI.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
    private readonly messageService: MessageService,
  ) {}

  async sendNotificationsToStoryOwnerAfterCommentPublication(
    comment: CommentEntity,
  ): Promise<LibraryResponse<any>> {
    const translation = comment.translations.filter(
      (translation) => translation.languageId === comment.language?.id,
    )[0];
    const { name, email } = prepareNotificationData(comment.story);

    if (email) {
      return this.notificationService.sendEmail(
        getMailTemplateId(
          comment.story.language?.code,
          USER_TEMPLATES.COMMENT_WAS_PUBLISH_ON_OBSERVED_STORY,
        ),
        {
          name,
          reply_preview: translation?.content,
          confirmation_link: prepareURL(
            this.config.get('frontend.url'),
            'story/details',
            comment.storyId,
          ),
        },
        {},
        [{ Email: email }],
      );
    }
  }

  async sendNotificationsAfterCommentPublication(
    comment: CommentEntity,
  ): Promise<void> {
    const { name, email } = prepareNotificationData(comment);
    const translation = comment.translations.filter(
      (translation) => translation.languageId === comment.language?.id,
    )[0];

    if (email) {
      await this.notificationService.sendEmail(
        getMailTemplateId(comment.language?.code, USER_TEMPLATES.PUBLISH_REPLY),
        {
          name,
          reply_preview: translation?.content,
          confirmation_link: prepareURL(
            this.config.get('frontend.url'),
            'story/details',
            comment.storyId,
          ),
        },
        {},
        [{ Email: email }],
      );
    }

    if (
      comment.story?.channel === CHANNEL_CONSTANTS.SMS &&
      comment.story?.organisations?.length > 0 &&
      comment.user?.organisation
    ) {
      const organisation = comment.story.organisations.find(
        (organisation) => organisation.id === comment.user?.organisation.id,
      );

      if (organisation) {
        const content = comment.translations.find(
          ({ languageId }) => languageId === comment.story.languageId,
        )?.content;
        if (!content) {
          return;
        }

        const provider = comment.story.conversation?.provider;

        const phoneAvailability =
          await this.messageService.checkPhoneAvailability(
            provider,
            comment.story,
          );

        this.logger.log(
          `sendNotificationsAfterCommentPublication, phoneAvailability: ${JSON.stringify(
            phoneAvailability,
          )}`,
        );

        if (phoneAvailability.type) {
          return;
        }

        const smsMessage = {
          organisation: organisation.name,
          language: comment.language?.code,
          clientPhone: comment.story?.recipient?.phone,
          providerPhone: comment.story.conversation?.serviceNumber,
          provider,
          storyId: comment.storyId,
          commentId: comment.id,
          country: comment.story?.country?.code,
          content,
        };

        await lastValueFrom(
          this.clientProxy
            .send({ cmd: `${provider}_organisationReply` }, smsMessage)
            .pipe(timeout(this.config.get('application.communicationTimeout'))),
        ).catch((error) => {
          this.logger.error(
            `sendNotificationsAfterCommentPublication - ${provider}_organisationReply: ${JSON.stringify(
              error,
            )}`,
          );
        });
      }
    }
  }

  async sendNotificationsAfterRejectingComment(
    comment: CommentEntity,
    rejectContent: RejectContentDto,
  ): Promise<void> {
    const { name, email } = prepareNotificationData(comment);

    if (rejectContent.reasonIds?.length > 0) {
      if (email) {
        await this.notificationService.sendEmail(
          getMailTemplateId(
            rejectContent.notificationLanguage,
            USER_TEMPLATES.REJECT_REPLY,
          ),
          {
            name,
            reject_reason: rejectContent.reasonTexts.join(', '),
            reject_rationale: rejectContent.rationale,
            confirmation_link: prepareURL(
              this.config.get('frontend.url'),
              'story/details',
              comment.storyId,
            ),
          },
          {},
          [{ Email: email }],
        );
      }
    }
  }
}
