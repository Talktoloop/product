import { Injectable, Inject, forwardRef, Logger } from '@nestjs/common';
import { StoryEntity } from '../../story/entity/story.entity';
import {
  getMailTemplateId,
  USER_TEMPLATES,
  MANAGER_TEMPLATES
} from '../../common/constant/email-templates.constants';
import { prepareNotificationData, prepareURL } from '../../common/helpers';
import { UserService } from '../../user/service/user.service';
import { UserEntity } from '../../user/entity/user.entity';
import { NotificationService } from './notification.service';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { CaseManagerService } from '../../case-manager/service/case-manager.service';

@Injectable()
export class StoryNotificationService {
  private readonly logger = new Logger(StoryNotificationService.name);

  constructor(
    private readonly notificationService: NotificationService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
    private caseManagerService: CaseManagerService
  ) { }

  async sendNotificationsAfterStoryPublication(
    story: StoryEntity,
  ): Promise<void> {

    if (
      story.edited &&
      this.config.get('application.disableNotificationsAfterEdit')
    )
      return;

    const { name, email, phone } = prepareNotificationData(story);
    const origin = story.translations.filter(
      (translation) => translation.languageId === story.language.id,
    )[0];

    //Notification for story author
    if (email) {

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
    } else if (phone && story.conversation?.smsMessages && story.conversation.provider) {
      await this.notificationService.sendSMS(
        story.language?.code,
        phone,
        story.conversation.serviceNumber,
        USER_TEMPLATES.PUBLISH_STORY,
        story.conversation.provider,
        story.country?.code,
      );
    }

    let users: UserEntity[] = [];

    //Notification for organisation if has been tagged
    if (story.organisations.length > 0) {
      users =
        await this.userService.findUsersFormOrganisationsWithNotificationOn(
          story.organisations,
        );
    }

    if (users) {
      let languageCode: string;
      let selectedTranslation: StoryTranslationEntity;
      const confirmationLink = await prepareURL(
        this.config.get('frontend.url'),
        'story/details',
        story.id,
      );

      Promise.all(
        users.map((user) => {
          languageCode = user.language?.code ?? LANGUAGES_CONSTANTS.ENGLISH;
          selectedTranslation = story.translations.filter(
            (translation) => translation.language.code === languageCode,
          )[0];

          return this.notificationService.sendEmail(
            getMailTemplateId(
              languageCode,
              USER_TEMPLATES.YOUR_ORGANISATION_HAS_BEEN_TAGGED,
            ),
            {
              name: user.nickname ?? '',
              organisation_name: user.organisation.name,
              story_preview: selectedTranslation
                ? selectedTranslation.content
                : origin.content,
              confirmation_link: confirmationLink,
            },
            {},
            [{ Email: user.email }],
            [],
            undefined,
            {
              Email: 'orgs@talktoloop.org',
              Name: "Talk to Loop Support",
            },
          );
        }),
      );
    }
  }

  async sendNotificationAfterUrgentStory(storyId: string): Promise<void> {
    const confirmationLink = await prepareURL(
      this.config.get('frontend.url'),
      'story/details',
      storyId,
    );
    const caseManagers = await this.caseManagerService.findWithEmail();
    for (let i = 0; i < caseManagers.length; i++) {
      const { email } = caseManagers[i];
      if (email) {
        await this.notificationService.sendEmail(
          MANAGER_TEMPLATES.URGENT_CASE,
          { confirmation_link: confirmationLink, }
          , {},
          [{ Email: email }],
        )
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
}
