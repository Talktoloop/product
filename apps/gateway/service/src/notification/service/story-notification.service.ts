import { Injectable, Inject, forwardRef, Logger } from '@nestjs/common';
import { StoryEntity } from '../../story/entity/story.entity';
import {
  getMailTemplateId,
  USER_TEMPLATES,
  MANAGER_TEMPLATES
} from '../../common/constant/email-templates.constants';
import { prepareNotificationData, prepareURL, isContactAccepted } from '../../common/helpers';
import { UserService } from '../../user/service/user.service';
import { UserEntity } from '../../user/entity/user.entity';
import { NotificationService } from './notification.service';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { CaseManagerEntity } from '../../case-manager/entity/case-manager.entity';

@Injectable()
export class StoryNotificationService {
  private readonly logger = new Logger(StoryNotificationService.name);

  constructor(
    private readonly notificationService: NotificationService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
  ) { }

  async sendNotificationsAfterStoryPublication(
    story: StoryEntity,
  ): Promise<void> {
    this.logger.log('[sendNotificationsAfterStoryPublication] START', {
      storyId: story.id,
      edited: story.edited,
      disableAfterEdit: this.config.get('application.disableNotificationsAfterEdit'),
      organisationsCount: story.organisations?.length ?? 0,
      translationsCount: story.translations?.length ?? 0,
    });

    const isRePublish = story.edited && this.config.get('application.disableNotificationsAfterEdit');

    // Author notification: only on first publish and only if user accepts contact
    if (isRePublish) {
      this.logger.log('[sendNotificationsAfterStoryPublication] Skipped author notification (re-publish with disable flag ON)');
    } else if (!isContactAccepted(story)) {
      this.logger.log('[sendNotificationsAfterStoryPublication] Skipped author notification (user does not want contact)');
    } else {
      const { name, email, phone } = prepareNotificationData(story);
      this.logger.log('[NotificationData]', { name, email, phone });

      const origin = story.translations.find(
        (translation) => translation.languageId === story.language.id,
      );

      if (email) {
        this.logger.log('[AuthorNotification] Sending EMAIL', { email });
        try {
          await this.notificationService.sendEmail(
            getMailTemplateId(story.language?.code, USER_TEMPLATES.PUBLISH_STORY),
            {
              name,
              var_preview: origin?.content,
              confirmation_link: prepareURL(
                this.config.get('frontend.url'),
                'story/details',
                story.id,
              ),
            },
            {},
            [{ Email: email }],
          );
          this.logger.log('[AuthorNotification] Email SENT', { email });
        } catch (err) {
          console.error('[AuthorNotification] Email FAILED', { email, err });
        }
      } else if (phone && story.conversation?.smsMessages && story.conversation.provider) {
        this.logger.log('[AuthorNotification] Sending SMS', {
          phone,
          provider: story.conversation.provider,
        });
        try {
          await this.notificationService.sendSMS(
            story.language?.code,
            phone,
            story.conversation.serviceNumber,
            USER_TEMPLATES.PUBLISH_STORY,
            story.conversation.provider,
            story.country?.code,
          );
          this.logger.log('[AuthorNotification] SMS SENT', { phone });
        } catch (err) {
          console.error('[AuthorNotification] SMS FAILED', { phone, err });
        }
      } else {
        this.logger.log('[AuthorNotification] Skipped (no email/phone)');
      }
    }

    // Org notifications are NOT sent here.
    // They are handled by sendNotificationsForOrganisationTags,
    // called from updateStory for both first-publish and re-publish flows.
    // This avoids double notifications and ensures orgs are always notified
    // regardless of author contact preference or disableNotificationsAfterEdit flag.

    this.logger.log('[sendNotificationsAfterStoryPublication] END', { storyId: story.id });
  }

  async sendNotificationAfterUrgentStory(
    storyId: string,
    caseManagers: CaseManagerEntity[],
  ): Promise<void> {
    const confirmationLink = await prepareURL(
      this.config.get('frontend.url'),
      'story/details',
      storyId,
    );
    for (let i = 0; i < caseManagers.length; i++) {
      const { email } = caseManagers[i];
      if (email) {
        await this.notificationService.sendEmail(
          MANAGER_TEMPLATES.URGENT_CASE,
          { confirmation_link: confirmationLink },
          {},
          [{ Email: email }],
        );
      }
    }
  }

  async sendNotificationsAfterRejectingStory(
    story: StoryEntity,
    rejectContent: RejectContentDto,
  ): Promise<void> {
    const { name, email, phone } = prepareNotificationData(story);

    if (rejectContent.reasonIds?.length > 0) {
      if (email) {
        await this.notificationService.sendEmail(
          getMailTemplateId(
            rejectContent.notificationLanguage,
            USER_TEMPLATES.REJECT_STORY,
          ),
          {
            name,
            reject_reason: rejectContent.reasonTexts.join(', '),
            reject_rationale: rejectContent.rationale,
            app_url: prepareURL(this.config.get('frontend.url'), null, null),
          },
          {},
          [{ Email: email }],
        );
      } else if (phone && story.conversation?.smsMessages) {
        if (!story.conversation.provider) return;

        await this.notificationService.sendSMS(
          rejectContent.notificationLanguage,
          phone,
          story.conversation.serviceNumber,
          USER_TEMPLATES.REJECT_STORY,
          story.conversation.provider,
          story.country?.code,
          {
            reasonText: rejectContent.reasonTexts.join(', '),
            rationale: rejectContent.rationale,
          },
        );
      }
    }
  }


  async sendNotificationsForOrganisationTags(
    story: StoryEntity,
    organisationIds: string[],
    options?: { force?: boolean },
  ): Promise<void> {
    if (
      !options?.force &&
      story.edited &&
      this.config.get('application.disableNotificationsAfterEdit')
    ) {
      return;
    }

    const organisationsToNotify = (story.organisations ?? []).filter(o =>
      organisationIds.includes(o.id),
    );

    if (organisationsToNotify.length === 0) return;

    const origin = story.translations.find(
      t => t.languageId === story.language.id,
    );

    const users = await this.userService.findUsersFormOrganisationsWithNotificationOn(
      organisationsToNotify,
    );

    if (!users?.length) return;

    const confirmationLink = prepareURL(
      this.config.get('frontend.url'),
      'story/details',
      story.id,
    );

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    for (const user of users) {
      const languageCode = user.language?.code ?? LANGUAGES_CONSTANTS.ENGLISH;
      const selectedTranslation = story.translations.find(
        t => t.language.code === languageCode,
      );

      await this.notificationService.sendEmail(
        getMailTemplateId(languageCode, USER_TEMPLATES.YOUR_ORGANISATION_HAS_BEEN_TAGGED),
        {
          name: user.nickname ?? '',
          organisation_name: user.organisation.name,
          story_preview: selectedTranslation?.content ?? origin?.content,
          confirmation_link: confirmationLink,
        },
        {},
        [{ Email: user.email }],
        [],
        undefined,
        { Email: 'orgs@talktoloop.org', Name: 'Talk to Loop Support' },
      );

      await delay(1000);
    }
  }
}
