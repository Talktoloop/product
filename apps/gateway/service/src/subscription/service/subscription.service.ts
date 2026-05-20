import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  forwardRef,
} from '@nestjs/common';
import {
  EMAIL_TEMPLATES,
  GENERATE_TOKEN_ERROR,
  SEND_MAIL_FAILED,
} from '@ourloop/shared';
import { NotificationService } from '../../notification/service/notification.service';
import { UserEntity } from '../../user/entity/user.entity';
import { ACCESS_TYPE } from '../constant/access-type.constant';
import { OrganisationService } from '../../organisation/organisation.service';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { GenerateTokenDTO } from '../request/dto/generate-token.dto';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from '../../user/repository/user.repository';
import { UserTokenRepository } from '../repository/user-token.repository';
import { OrganisationTokenRepository } from '../repository/organisation-token.repository';
import { SuccessRO } from '../../common/response/success.ro';
import { SubscriptionTokenInterface } from './../interface/subscription-token.interface';
import { format } from 'date-fns';
import { SubscriptionToken } from '../type/subscription-token.type';
import {
  getMailTemplateId,
  USER_TEMPLATES,
} from '../../common/constant/email-templates.constants';
import { LibraryResponse } from 'node-mailjet';
import { SubscriptionApplicationRepository } from '../repository/subscription-application.repository';
import { SubscriptionApplicationEntity } from '../entity/subscription-application.entity';
import { REGISTRATION_STATUS } from '../../user/constant/registration-status.constant';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';

@Injectable()
export class SubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);
  constructor(
    private readonly notificationService: NotificationService,
    @Inject(forwardRef(() => OrganisationService))
    private readonly organisationService: OrganisationService,
    private readonly organisationRepository: OrganisationRepository,
    private readonly userRepository: UserRepository,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    private readonly userTokenRepository: UserTokenRepository,
    private readonly organisationTokenRepository: OrganisationTokenRepository,
    private readonly subscriptionApplicationRepository: SubscriptionApplicationRepository,
    private readonly airTableUserService: AirTableUserService,
  ) { }

  public decodeToken(token: string): SubscriptionToken {
    if (!token) return;
    try {
      return jwt.verify(token, this.config.get('subscription.jwtSecret'));
    } catch (error) {
      return;
    }
  }

  public checkIfTokenExpired(expirationTime: number): boolean {
    if (!expirationTime) {
      return true;
    }

    return expirationTime < parseInt(format(new Date(), 't'));
  }

  async sendEmailWithSubscriptionRequest(
    user: UserEntity,
    access: string,
  ): Promise<SuccessRO> {
    const emailTemplate =
      access === ACCESS_TYPE.FREE
        ? EMAIL_TEMPLATES.LOOP_PREMIUM_FREE_ACCESS_REQUEST
        : EMAIL_TEMPLATES.LOOP_PREMIUM_PAID_ACCESS_REQUEST;

    const organisation = await this.organisationRepository.findOne({
      where: { id: user.organisation_id },
    });
    const organisationDetails =
      this.organisationService.getOrganisationDetails(organisation);

    const receivers = (
      this.config.get('subscription.premiumRequestEmailsReceiver') ?? ''
    ).split(',');

    await this.notificationService
      .sendEmail(
        emailTemplate,
        {
          nickname: user.nickname,
          email: user.email,
          organisationDetails: organisationDetails ?? '--',
        },
        {},
        receivers.map((receiver) => ({ Email: receiver })),
      )
      .catch((error) => {
        throw new BadRequestException(SEND_MAIL_FAILED);
      });

    return { success: true };
  }

  async sendNotificationWithToken(
    user: UserEntity,
    token: string,
  ): Promise<LibraryResponse<any>> {
    return this.notificationService
      .sendEmail(
        getMailTemplateId(
          user.language?.code,
          USER_TEMPLATES.USER_SUBSCRIPTON_TOKEN,
        ),
        {},
        { token },
        [{ Email: user.email }],
      )
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(SEND_MAIL_FAILED);
      });
  }

  async sendPremiumActivationEmail(
    ownerId: string,
    isOrganisation: boolean,
    token: string,
  ): Promise<SuccessRO> {
    const receivers = [];
    if (isOrganisation) {
      const users = await this.userRepository.find({
        where: {
          organisation_id: ownerId,
          accountStatus: REGISTRATION_STATUS.COMPLETE,
        },
      });
      users.map((user) => receivers.push([user.email, user.firstName]));
    } else {
      const user = await this.userRepository.findOne({
        where: { id: ownerId },
      });
      receivers.push([user?.email, user?.firstName]);
    }

    const senders = (
      this.config.get('subscription.loopAdvocateEmailSenders') ?? ''
    ).split(',');

    for (const [email, name] of receivers) {
      await this.notificationService
        .sendEmail(
          EMAIL_TEMPLATES.LOOP_PREMIUM_ACCOUNT_APPROVED,
          { name },
          {},
          [{ Email: email }],
          null,
          { Email: senders[0] },
        )
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(SEND_MAIL_FAILED);
        });

      await this.notificationService
        .sendEmail(
          EMAIL_TEMPLATES.LOOP_PREMIUM_ACCESS_TOKEN,
          { token },
          {},
          [{ Email: email }],
          null,
          { Email: senders[1] },
        )
        .catch((error) => {
          this.logger.error(error);
          throw new BadRequestException(SEND_MAIL_FAILED);
        });
    }

    return { success: true };
  }

  async saveSubscriptionData(
    data: GenerateTokenDTO,
    token: string,
  ): Promise<void> {
    const { organisationId, userId } = data;
    const createdAt = new Date();

    if (organisationId) {
      if (!organisationId) return;

      const organisationToken = await this.organisationTokenRepository.findOne({
        where: { organisationId },
      });
      if (organisationToken) {
        organisationToken.token = token;
        organisationToken.createdAt = createdAt;
        await this.organisationTokenRepository.save(organisationToken);
      } else {
        await this.organisationTokenRepository.save({
          token,
          organisationId,
          createdAt,
        });
      }
      await this.sendPremiumActivationEmail(organisationId, true, token);
    } else {
      if (!userId) return;

      const userToken = await this.userTokenRepository.findOne({
        where: { userId },
      });

      if (userToken) {
        userToken.token = token;
        userToken.createdAt = createdAt;
        await this.userTokenRepository.save(userToken);
      } else {
        await this.userTokenRepository.save({ token, userId, createdAt });
      }
      await this.sendPremiumActivationEmail(userId, false, token);
    }
  }

  async generateSubscriptionToken(
    data: GenerateTokenDTO,
  ): Promise<{ subscriptionToken: SubscriptionTokenInterface }> {
    let { organisationId, userId } = data;
    try {
      if (organisationId) {
        await this.organisationRepository.findOneOrFail({
          where: { id: organisationId },
        })
      } else {
        const user = await this.userRepository.findOneOrFail({ where: { id: userId } });
        // if a user already belongs to an org fetch the org id
        if (user?.organisation_id) {
          organisationId = user.organisation_id
          // mutate org id in data because airtable will only send the userId and this function
          // will lookup if the user is part of an org, at the end of the function the data var is used
          // again to save the token in the database
          data.organisationId = organisationId
        }
      }
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(GENERATE_TOKEN_ERROR);
    }

    const payload = {
      sub: organisationId ?? userId,
      groupType: organisationId ? 'organisation' : 'individual',
      plan: data.subscriptionType,
    };

    const token = jwt.sign(payload, this.config.get('subscription.jwtSecret'), {
      expiresIn: `${data.tokenValidityInDays} days`,
    });

    if (!token.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)) {
      throw new BadRequestException(GENERATE_TOKEN_ERROR);
    }

    await this.saveSubscriptionData(data, token);

    return { subscriptionToken: token };
  }

  async checkIfTokenExists(token: string, groupType: string): Promise<boolean> {
    if (groupType === 'individual') {
      return !!(await this.userTokenRepository.findByToken(token));
    }

    return !!(await this.organisationTokenRepository.findByToken(token));
  }

  private async renewOrganisationToken(
    organisationId: string,
    plan: string,
  ): Promise<string> {
    const validityDays =
      this.config.get<number>('subscription.loopAdvocateTokenValidityInDays') ?? 365;

    const payload = {
      sub: organisationId,
      groupType: 'organisation',
      plan,
    };

    const token = jwt.sign(payload, this.config.get('subscription.jwtSecret'), {
      expiresIn: `${validityDays} days`,
    });

    const createdAt = new Date();
    const organisationToken = await this.organisationTokenRepository.findOne({
      where: { organisationId },
    });

    if (organisationToken) {
      organisationToken.token = token;
      organisationToken.createdAt = createdAt;
      await this.organisationTokenRepository.save(organisationToken);
    } else {
      await this.organisationTokenRepository.save({ token, organisationId, createdAt });
    }

    return token;
  }

  async getUserSubscriptionToken(
    userData: UserEntity,
  ): Promise<{ decodedToken: SubscriptionToken; token: string }> {
    let decodedToken: SubscriptionToken;
    let token: string = null;
    let isExpired = true;
    const loopId = '4e607482-5979-4fb1-b4a9-58c9301097f1';

    if (userData?.organisation_id) {
      const organisationTokenData =
        await this.organisationTokenRepository.findOne({
          where: { organisationId: userData?.organisation_id },
        });

      decodedToken = this.decodeToken(organisationTokenData?.token);
      isExpired = this.checkIfTokenExpired(decodedToken?.exp);

      if (!isExpired) token = organisationTokenData?.token;

      // If the organisation token is expired and this user belongs to the Loop org, auto-renew it
      if (isExpired && userData?.organisation_id === loopId) {
        const newToken = await this.renewOrganisationToken(
          userData.organisation_id,
          decodedToken?.plan ?? 'premium',
        );
        const newDecoded = this.decodeToken(newToken);
        return { decodedToken: newDecoded, token: newToken };
      }
    }

    if (isExpired) {
      const userTokenData = await this.userTokenRepository.findOne({
        where: { userId: userData?.id },
      });

      decodedToken = this.decodeToken(userTokenData?.token);
      isExpired = this.checkIfTokenExpired(decodedToken?.exp);
      if (!isExpired) token = userTokenData?.token;
    }

    return !isExpired ? { decodedToken, token } : null;
  }

  async saveSubscriptionApplication(
    userId: string,
    access: string,
    type: string,
  ): Promise<SubscriptionApplicationEntity> {
    const res = await this.airTableUserService.updateAirTableUser({
      ID: userId,
      'Loop Advocate Request Status': 'pending',
    });
    return await this.subscriptionApplicationRepository.save({
      userId,
      access,
      type,
    });
  }
}
