import {
  Injectable,
  Inject,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { EditUserNotificationDto } from '../request/dto/edit-user-notifications.dto';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { GooglePlaces } from 'google-places-web';
import { GooglePlaceQueryAutocompleteResponse } from 'google-place-types';
import { FindLocationsByPhraseDTO } from '../request/dto/find-locations-by-phrase.dto';
import {
  GET_LOCALIZATION_FAILED,
  UPDATE_USER_ERROR,
  USER_MIGRATION_FAILED,
  setDelay,
} from '@ourloop/shared';
import * as GeoIp from 'geoip-lite';
import { FindLocationsByCoordinatesDTO } from '../request/dto/find-locations-by-coordinates.dto';
import * as Geocoding from 'reverse-geocoding';
import { ConfigService } from '@nestjs/config';
import { CountryService } from '../../country/service/country.service';
import { UpdateResult } from 'typeorm';
import config from '../../config/typeorm';
import {
  prepareUsername,
  checkRegistrationStatus,
  getConnection,
} from '../../common/helpers';
import { StoryEntity } from '../../story/entity/story.entity';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { IvrrCallEntity } from '../../ivrr/entity/ivrr-call.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
import { MessengerMessageEntity } from '../../messenger/entity/messenger-message.entity';
import { CommentVoteEntity } from '../../comment/entity/comment-vote.entity';
import { StoryHistoricalTranslationEntity } from '../../story/entity/story-historical-translation.entity'; // moderator_id
import { StoryVoteEntity } from '../../story/entity/story-vote.entity';
import { OrganisationApplicationEntity } from '../entity/organisation-application.entity';
import { ROLE } from '../constant/role.constant';
import { ConsentsDto } from '../request/dto/consents.dto';
import { UserConsentRepository } from '../repository/user-consent.repository';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { REGISTRATION_STATUS } from '../../user/constant/registration-status.constant';
import { NotificationService } from '../../notification/service/notification.service';
import { BrevoService } from './brevo.service';
import { EditUserHideLastName } from '../request/dto/edit-user-hide-last-name.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly userRepository: UserRepository,
    @Inject(DI_CONSTANTS.GOOGLE_PLACES)
    private readonly googlePlaces: GooglePlaces,
    @Inject(DI_CONSTANTS.GEO_IP)
    private readonly geoIp: GeoIp,
    @Inject(DI_CONSTANTS.GEOCODING)
    private readonly geocoding: Geocoding,
    private readonly countryService: CountryService,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly userConsentRepository: UserConsentRepository,
    private readonly airTableUserService: AirTableUserService,
    private readonly notificationService: NotificationService,
    private readonly brevoService: BrevoService,
  ) { }

  async saveUser(
    data: Partial<UserEntity>,
    moderator?: UserEntity,
  ): Promise<UserEntity> {
    const accountStatus = checkRegistrationStatus(data);

    const userToSave = {
      ...data,
      accountStatus: accountStatus,
    };

    if (accountStatus === REGISTRATION_STATUS.INVITED && moderator) {
      userToSave.invitationDate = new Date();
      userToSave.invitedBy = moderator;
    }

    const user = await this.userRepository.saveUser(userToSave);

    if (user) {
      try {
        const userData = await this.userRepository.findUsersToAirtable(user.id);
        if (user.organisation_id) {
          this.airTableUserService.syncNumberOfUsersToAirtable(
            user.organisation_id,
          );
        }

        const userToAirTable = await this.airTableUserService.mapUserToAirTable(
          userData,
          moderator?.nickname,
        );
        const airTableUserData =
          await this.airTableUserService.postUsersToAirTable(userToAirTable);

        if (airTableUserData?.length > 0) {
          this.airTableUserService.findAndUpdateAirTableOrganisation(
            airTableUserData,
          );
        }
      } catch (error) {
        this.logger.error(error.message);
      }
    }

    return user;
  }

  async checkConsents(
    data: Partial<UserEntity>,
    consents?: ConsentsDto,
  ): Promise<Partial<UserEntity>> {
    for (const key of Object.keys(consents)) {
      let consent = await this.userConsentRepository.findOne({
        where: { document: consents[key] ?? '' },
      });

      if (!consent) {
        consent = await this.userConsentRepository.save({
          document: consents[key],
        });
      }

      data[`${key}Id`] = consent.id;
    }

    return data;
  }

  async updateUserData(
    data: Partial<UserEntity>,
    userId: string,
    optin_marketing?: boolean,
    consents?: ConsentsDto,
    organisationApplicationId?: string,
    email?: string,
  ): Promise<UpdateResult> {
    const userBeforeUpdate = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (
      typeof optin_marketing === 'boolean' &&
      userBeforeUpdate?.optin_marketing !== optin_marketing
    ) {
      if (optin_marketing === true) {
        this.brevoService.createContact(email);
      } else {
        this.brevoService.deleteContactFromList(email);
      }
    }

    const userStatusBeforeUpdate = checkRegistrationStatus(userBeforeUpdate);

    if (consents) {
      data = await this.checkConsents(data, consents);
      data.consentsDate = new Date();
    }
    const nickname = prepareUsername(data, data.hideLastName);
    const user = {
      ...data,
      nickname: nickname,
      optin_marketing: optin_marketing || false,
      organisation_id: organisationApplicationId

    };

    const updatedUser = await this.userRepository
      .update(userId, user)
      .catch((error) => {
        this.logger.error(error.response);
        throw new BadRequestException(UPDATE_USER_ERROR);
      });

    if (updatedUser?.affected) {
      const status = await this.updateUserAccountStatus(userId);

      if (
        status === REGISTRATION_STATUS.COMPLETE &&
        [
          REGISTRATION_STATUS.INVITED,
          REGISTRATION_STATUS.REQUIRE_PROFILE_UPDATE,
        ].includes(userStatusBeforeUpdate)
      ) {
        await this.userRepository
          .update(userId, {
            registrationDate: new Date(),
          })
          .catch((error) => {
            this.logger.error(error.response);
            throw new BadRequestException(UPDATE_USER_ERROR);
          });

        this.notificationService.sendSlackNotification(
          userId,
          organisationApplicationId,
        );
      }

      this.airTableUserService
        .updateAirTableUser({
          ID: userId,
          Nickname: nickname,
          'Account status': status,
        })
        .then(() => {
          this.airTableUserService.findAndUpdateAirTableOrganisation([
            { dBUserId: userId },
          ]);
        });
      1;
    }
    return updatedUser;
  }

  async updateUserNotification(
    data: EditUserNotificationDto,
    userId: string,
  ): Promise<UpdateResult> {
    return this.userRepository.update(userId, {
      notifications: data.notifications,
      reminders: data.reminders,
    });
  }

  async updateUserHideLastName(
    data: EditUserHideLastName,
    userId: string,
  ): Promise<{ nickname: string; result: UpdateResult }> {
    const nickname = prepareUsername(data, data.hideLastName);

    const result = await this.userRepository.update(userId, {
      hideLastName: data.hideLastName,
      nickname: nickname,
    });

    return { nickname, result };
  }

  async migrateUser(oldUser: UserEntity, newUserId: string) {
    const connection = await getConnection(config);
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.query('set foreign_key_checks=0');
      await Promise.all([
        queryRunner.manager.update(
          UserEntity,
          { id: oldUser.id },
          {
            id: newUserId,
            notifications:
              oldUser.role === ROLE.USER ? true : oldUser.notifications,
          },
        ),
        queryRunner.manager.update(
          StoryEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          StoryEntity,
          { statusChangedByUserId: oldUser.id },
          { statusChangedByUserId: newUserId },
        ),
        queryRunner.manager.update(
          StoryEntity,
          { markedAsSensitiveByUserId: oldUser.id },
          { markedAsSensitiveByUserId: newUserId },
        ),
        queryRunner.manager.update(
          CommentEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          IvrrCallEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          MessageEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          MessengerMessageEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          CommentVoteEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          StoryHistoricalTranslationEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          StoryVoteEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
        queryRunner.manager.update(
          OrganisationApplicationEntity,
          { userId: oldUser.id },
          { userId: newUserId },
        ),
      ]);
      await queryRunner.query('set foreign_key_checks=1');
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();

      this.logger.error(error);

      if (error.code === 'ER_ROW_IS_REFERENCED_2') {
        await setDelay(1000);
        await this.migrateUser(oldUser, newUserId);
      } else {
        throw new BadRequestException(USER_MIGRATION_FAILED);
      }
    } finally {
      await queryRunner.release();
    }
  }

  findById(id: string, relations?: string[]): Promise<UserEntity> {
    if (!id) {
      return;
    }

    return this.userRepository.findById(id, relations);
  }

  findByEmail(email: string, relations?: string[]): Promise<UserEntity> {
    if (!email) return;

    return this.userRepository.findOne({ where: { email }, relations });
  }

  findUsersFormOrganisationsWithNotificationOn(
    organisations: Partial<OrganisationEntity>[],
  ): Promise<UserEntity[]> {
    return this.userRepository.findUsersWithNotificationOn(organisations);
  }

  findUsersFormOrganisationsWithRemindersOn(
    organisations: Partial<OrganisationEntity>[],
  ): Promise<UserEntity[]> {
    return this.userRepository.findUsersWithRemindersOn(organisations);
  }

  checkCountry(ipAddress: string): { country: string } {
    return this.geoIp.lookup(ipAddress);
  }

  findLocationsByCoordinates(
    language: string,
    params: FindLocationsByCoordinatesDTO,
  ): Promise<{ results: [{ types: string[] }] }> {
    return new Promise((resolve, reject) => {
      this.geocoding(
        {
          ...params,
          key: this.config.get('location.googleApiKey'),
          language,
        },
        (error, data) => {
          if (error)
            return reject(new BadRequestException(GET_LOCALIZATION_FAILED));

          resolve(data);
        },
      );
    });
  }

  async findLocationsByPhrase(
    language: string,
    data: FindLocationsByPhraseDTO,
  ): Promise<GooglePlaceQueryAutocompleteResponse> {
    const country = await this.countryService.findByCodeOrFail(data.country);

    return this.googlePlaces
      .autocomplete({
        input: `${country?.name ?? ''}, ${data.phrase}`,
        radius: 1,
        language,
        types: ['(regions)'],
      })
      .catch((error) => {
        if (error?.message === 'ZERO_RESULTS') {
          return [];
        }

        throw new BadRequestException(GET_LOCALIZATION_FAILED);
      });
  }

  async getUserOrganisationIdByEmail(
    email: string,
  ): Promise<Record<string, string>> {
    if (!email) return;

    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['organisation'],
    });
    return {
      organisationId: user?.organisation_id ?? null,
      name: user?.organisation?.name,
    };
  }

  async updateStatuses(): Promise<Partial<UserEntity>[]> {
    const allUsers = await this.userRepository.find();
    const result = await Promise.all(
      allUsers.map(async (user) => {
        user.accountStatus = checkRegistrationStatus(user);
        await this.userRepository.update(user.id, {
          accountStatus: user.accountStatus,
        });
        return { id: user.id, accountStatus: user.accountStatus };
      }),
    );

    return result;
  }

  async updateLastActivity(userId: string): Promise<void> {
    const now = new Date();
    await this.userRepository.update(userId, { lastActivity: now });
    this.airTableUserService.updateLastActivity(now, userId);
  }

  async updateUserAccountStatus(userId: string): Promise<REGISTRATION_STATUS> {
    const user = await this.userRepository.findOneOrFail({
      where: { id: userId },
      relations: ['organisationApplication'],
    });
    const status = checkRegistrationStatus(user);
    await this.userRepository
      .update(user.id, {
        accountStatus: status,
      })
      .catch((error) => {
        this.logger.error(error.response);
        throw new BadRequestException(UPDATE_USER_ERROR);
      });

    return status;
  }
}
