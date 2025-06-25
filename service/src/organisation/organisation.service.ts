import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { OrganisationRepository } from './organisation.repository';
import { OrganisationEntity } from './entity/organisation.entity';
import { LexiconServiceFactory } from '../lexicon/factory/service.factory';
import { UserEntity } from '../user/entity/user.entity';
import { UserService } from '../user/service/user.service';
import { StoryTranslationModeratorService } from '../story/service/story-translation-moderator.service';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import {
  OrganisationWithUnsansweredStoryInterface,
  OrganisationWithUnsansweredStoriesInterface,
} from './interface/organisation-with-unanswered-stories';
import { upperCaseFirst, getDomainFromEmail } from '../common/helpers';
import { NotificationService } from '../notification/service/notification.service';
import {
  MANAGER_TEMPLATES,
  USER_TEMPLATES,
  getMailTemplateId,
} from '../common/constant/email-templates.constants';
import { LibraryResponse } from 'node-mailjet';
import { staticConfig } from '../config/default';
import { LinkUserToOrganisationDTO } from './request/dto/link-users-to-organisations.dto';
import { VALIDATION_FAILED } from '@ourloop/shared';
import { v4 as uuidv4 } from 'uuid';
import { LinkedUser } from './type/linked-user.type';
import { OrganisationApplicationService } from '../user/service/organisation-application.service';
import { Like } from 'typeorm';
import { ROLE } from '../user/constant/role.constant';
import { OrganisationWithDetails } from './type/organisation-with-details.type';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';

@Injectable()
export class OrganisationService implements LexiconServiceFactory {
  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly organisationRepository: OrganisationRepository,
    private readonly userService: UserService,
    private readonly storyTranslationModeratorService: StoryTranslationModeratorService,
    private readonly notificationService: NotificationService,
    private readonly organisationApplicationService: OrganisationApplicationService,
    private readonly airTableOrganisationService: AirTableOrganisationService,
  ) {}

  findAll(): Promise<OrganisationEntity[]> {
    return this.organisationRepository.findAll();
  }

  getOrganisationsByRole(role: ROLE): Promise<OrganisationWithDetails[]> {
    return this.organisationRepository.getOrganisationsByRole(role);
  }

  findByIdOrFail(id: string): Promise<OrganisationEntity> {
    return this.organisationRepository.findByIdOrFail(id);
  }

  findOrganisationIdsByPhrase(phrase: string): Promise<string[]> {
    return this.organisationRepository
      .findOrganisationsByPhrase(phrase)
      .then((result) => result.map((item) => item.id));
  }

  findOrganisationsByIdsAndStatus(
    ids: string[], // verified: boolean,
  ): Promise<OrganisationEntity[]> {
    return this.organisationRepository.findOrganisationsByIdsAndStatus(
      ids,
      //TODO: https://elitecrew.atlassian.net/browse/OL-3274
      //verified,
    );
  }

  async linkUsers(
    organisations: OrganisationEntity[],
    data: LinkUserToOrganisationDTO[],
    moderator?: UserEntity,
  ): Promise<LinkedUser[]> {
    const emails = [...new Set(data.map((item) => item.email.toLowerCase()))];
    const organisationIds = [
      ...new Set(data.map((item) => item.organisationId)),
    ];

    if (
      emails.length !== data.length ||
      organisations.length !== organisationIds.length
    ) {
      throw new BadRequestException(VALIDATION_FAILED);
    }

    let user: UserEntity;
    const linkedUsers: LinkedUser[] = [];

    for (const link of data) {
      user = await this.userService.findByEmail(link.email);

      if (!user) {
        user = await this.userService.saveUser(
          {
            id: uuidv4(),
            email: link.email,
            organisation_id: link.organisationId,
            notifications: false,
            hideLastName: false,
          },
          moderator,
        );
        linkedUsers.push({
          email: link.email,
          languageCode: link.languageCode,
          organisationId: link.organisationId,
        });
      } else if (!user.organisation_id) {
        user.organisation_id = link.organisationId;

        await this.userService.updateUserData(user, user.id);
        await this.organisationApplicationService.removeApplicationByUserId(
          user.id,
        );

        linkedUsers.push({
          email: user.email,
          languageCode: link.languageCode,
          organisationId: link.organisationId,
        });
      }
    }

    return linkedUsers;
  }

  async sendUserLinkedNotification(
    storyId: string,
    sender: UserEntity,
    organisations: OrganisationEntity[],
    linkedUsers: LinkedUser[],
  ): Promise<Array<LibraryResponse<any>>> {
    const mailJetEmail = this.config.get('mailJet.email');
    return Promise.all(
      linkedUsers.map((item) => {
        const organisation = organisations.find(
          (entity) => entity.id === item.organisationId,
        );

        return this.notificationService.sendEmail(
          getMailTemplateId(
            item.languageCode,
            USER_TEMPLATES.USER_LINKED_TO_ORGANISATION,
          ),
          {
            organisationName: organisation?.name,
            organisationDetails: this.getOrganisationDetails(organisation),
          },
          {
            storyLink: `${this.config.get(
              'frontend.url',
            )}/story/details/${storyId}?redirect=login`,
          },
          [{ Email: item.email }],
          [],
          getDomainFromEmail(sender.email) === getDomainFromEmail(mailJetEmail)
            ? { Email: sender.email, Name: sender.nickname }
            : undefined,
        );
      }),
    );
  }

  async sendUserInvitedNotification(
    organisations: OrganisationEntity[],
    linkedUsers: LinkedUser[],
    sender?: UserEntity,
  ): Promise<Array<LibraryResponse<any>>> {
    const mailJetEmail = this.config.get('mailJet.email');
    return Promise.all(
      linkedUsers.map((item) => {
        const organisation = organisations.find(
          (entity) => entity.id === item.organisationId,
        );

        return this.notificationService.sendEmail(
          getMailTemplateId(
            item.languageCode,
            USER_TEMPLATES.USER_INVITED_TO_ORGANISATION,
          ),
          {
            organisationName: organisation?.name,
          },
          {
            url: `${this.config.get('frontend.url')}/auth/magic-link-login`,
          },
          [{ Email: item.email }],
          [],
          getDomainFromEmail(sender?.email) === getDomainFromEmail(mailJetEmail)
            ? { Email: sender.email, Name: sender.nickname }
            : undefined,
        );
      }),
    );
  }

  async sendNotificationsToLinkedUsers(
    storyId: string,
    sender: UserEntity,
    organisations: OrganisationEntity[],
    linkedUsers: LinkedUser[],
  ): Promise<Array<LibraryResponse<any>>> {
    const linkNotifications = await this.sendUserLinkedNotification(
      storyId,
      sender,
      organisations,
      linkedUsers,
    );

    const inviteNotifications = await this.sendUserInvitedNotification(
      organisations,
      linkedUsers,
      sender,
    );

    return linkNotifications.concat(inviteNotifications);
  }

  getOrganisationDetails(organisation: OrganisationEntity): string {
    let organisationDetails = organisation?.name;

    if (organisation?.acronym) {
      organisationDetails += ` (${organisation.acronym})`;
    }

    if (organisation?.country) {
      organisationDetails += `, ${organisation.country.name}`;
    }

    return organisationDetails;
  }

  async findByNameOrCreate(
    name: string,
    verified: boolean,
    countryId?: number,
    acronym?: string,
  ): Promise<OrganisationEntity> {
    const data = {
      name: Like(name),
      ...(countryId ? { countryId } : {}),
      ...(acronym ? { acronym: Like(acronym) } : {}),
    };
    const organisation = await this.organisationRepository.findOne({
      where: data,
    });

    if (!organisation) {
      const UUID = uuidv4();
      const newOrganisation = await this.organisationRepository.save(
        {
          name,
          id: UUID,
          verified,
          countryId,
          acronym,
        },
        { reload: false },
      );

      if (newOrganisation) {
        const organisationToAirTable =
          await this.airTableOrganisationService.mapOrganisationToAirTable(
            await this.organisationRepository.findOrganisationsToAirtable(
              newOrganisation.id,
            ),
          );
        await this.airTableOrganisationService.postOrganisationsToAirTable(
          organisationToAirTable,
        );
      }

      return this.organisationRepository.findOne({ where: { id: UUID } });
    }
    return organisation;
  }

  async findOrganisationsWithUnasweredStories(
    languageId: number,
  ): Promise<Array<OrganisationWithUnsansweredStoriesInterface>> {
    const publicationDuration =
      staticConfig.unanswaredStories.publicationDuration;
    const result =
      await this.organisationRepository.findOrganisationsWithNumberOfComments(
        languageId,
        publicationDuration,
      );
    const organisationsWithUnasweredStories = [];

    result.forEach((item) => {
      if (!organisationsWithUnasweredStories[item.organisationId]) {
        organisationsWithUnasweredStories[item.organisationId] = {
          name: item.organisationName,
          stories: {
            numberOfAnswered: 0,
            unanswered: [],
          },
        };
      }

      if (item.numberOfComments === 0) {
        organisationsWithUnasweredStories[
          item.organisationId
        ].stories.unanswered.push({
          id: item.storyId,
          content: item.content,
          originalLanguageId: item.originalLanguageId,
        });
      } else {
        organisationsWithUnasweredStories[item.organisationId].stories
          .numberOfAnswered++;
      }
    });

    return organisationsWithUnasweredStories;
  }

  async getBeginningOfStory(
    story: OrganisationWithUnsansweredStoryInterface,
    numberOfSigns,
  ): Promise<string> {
    if (!story.content) {
      const details =
        await this.storyTranslationModeratorService.getTranslations(story.id);

      story.content = details.translations.find(
        (item) => item.languageId === story.originalLanguageId,
      )?.content;
    }

    let shortcut = story.content.substr(0, numberOfSigns).trim();

    if (shortcut.substr(-1, 1) === '.') {
      shortcut = shortcut.substr(0, shortcut.length - 1);
    }

    return upperCaseFirst(
      `${shortcut}${
        story.content.substr(numberOfSigns - 1, 1).trim() &&
        story.content.substr(numberOfSigns, 1).trim()
          ? '...'
          : ''
      }`,
    );
  }

  async sendNotificationAboutUnansweredStories(
    data: Array<OrganisationWithUnsansweredStoriesInterface>,
  ): Promise<Array<LibraryResponse<any>>> {
    let users: UserEntity[] = [];
    let organisation: OrganisationWithUnsansweredStoriesInterface;
    let shortcut: string;
    let numberOfUnanswered: number;

    const notifications = [];
    const { publicationDuration, shortcutLength } =
      staticConfig.unanswaredStories;

    for (const organisationId in data) {
      organisation = data[organisationId];
      numberOfUnanswered = organisation.stories.unanswered.length;

      if (numberOfUnanswered > 0) {
        users =
          await this.userService.findUsersFormOrganisationsWithRemindersOn([
            { id: organisationId } as Partial<OrganisationEntity>,
          ]);

        if (users.length > 0) {
          const stories = [];

          for (const story of data[organisationId].stories.unanswered) {
            shortcut = await this.getBeginningOfStory(story, shortcutLength);

            stories.push({
              shortcut,
              url: `${this.config.get('frontend.url')}/story/details/${
                story.id
              }`,
            });
          }

          for (const user of users) {
            notifications.push(
              this.notificationService.sendEmail(
                MANAGER_TEMPLATES.UNANSWERED_STORIES,
                {
                  publicationDuration,
                  organisation: organisation.name,
                  name: user.nickname ?? user.email,
                  numberOfFeedbacksWithoutReply: numberOfUnanswered,
                  numberOfFeedback:
                    organisation.stories.numberOfAnswered + numberOfUnanswered,
                },
                {
                  stories,
                },
                [{ Email: user.email }],
              ),
            );
          }
        }
      }
    }

    if (notifications.length > 0) {
      return Promise.all(notifications);
    }
  }

  findByPhrases(phrases: string[]): Promise<OrganisationEntity[]> {
    if (!phrases) {
      return null;
    }

    return this.organisationRepository.findOriganisationsByPhrases(phrases);
  }
}
