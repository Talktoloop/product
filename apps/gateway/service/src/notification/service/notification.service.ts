import { Injectable, Inject } from '@nestjs/common';
import { SendEmailV3, LibraryResponse, Client } from 'node-mailjet';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import {
  DI_CONSTANTS as SHARED_DI_CONSTANTS,
  MailJetService,
  EMAIL_TEMPLATES,
} from '@ourloop/shared';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { Logger } from '@nestjs/common';
import { UserRepository } from '../../user/repository/user.repository';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import axios from 'axios';

@Injectable()
export class NotificationService extends MailJetService {
  public readonly customLogger = new Logger(NotificationService.name);

  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    @Inject(DI_CONSTANTS.MAIL_JET) mailJet: Client,
    @Inject(SHARED_DI_CONSTANTS.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    private readonly userRepository: UserRepository,
    private readonly organisationRepository: OrganisationRepository,
  ) {
    super(mailJet);

    this.setEmailSender(config.get('mailJet'));
  }

  async sendEmail(
    templateId: number,
    variablesToEscapeAndSend: Record<string, unknown>,
    variablesToSend: Record<string, unknown>,
    to: { Email: string; Name?: string }[],
    attachments?: SendEmailV3.Attachment[],
    from?: { Email: string; Name?: string },
    replyTo?: { Email: string; Name?: string },
  ): Promise<LibraryResponse<any>> {
    const allowedEmailTemplates = [
      EMAIL_TEMPLATES.SUPPORT_TEAM_NOTIFICATION,
      EMAIL_TEMPLATES.EXPORT_TO_CSV,
    ];

    if (
      !this.config.get('application.disableNotifications') ||
      allowedEmailTemplates.includes(templateId)
    ) {
      return super.sendEmail(
        templateId,
        variablesToEscapeAndSend,
        variablesToSend,
        to,
        attachments,
        from,
        replyTo,
      );
    }
  }

  async sendMessageToSupportTeam(
    message: string,
  ): Promise<LibraryResponse<any>> {
    return this.sendEmail(
      EMAIL_TEMPLATES.SUPPORT_TEAM_NOTIFICATION,
      {
        error_details: message,
      },
      {},
      this.config
        .get('supportEmail')
        .split(',')
        .map((email: string) => ({
          Email: email,
        })),
    );
  }

  async sendSMS(
    language: string,
    clientPhone: string,
    providerPhone: string,
    type: string,
    provider: string,
    country: string,
    variables?: Record<string, unknown>,
  ): Promise<void> {
    if (this.config.get('application.disableNotifications')) {
      return;
    }

    await lastValueFrom(
      this.clientProxy
        .send(
          { cmd: `${provider}_sendNotification` },
          {
            clientPhone,
            providerPhone,
            type,
            language,
            provider,
            variables,
          },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    ).catch((error) => {
      this.customLogger.error(
        `sendSMS: ${error.message}, error: ${JSON.stringify(error.error)}`,
      );
    });
  }

  async sendSlackNotification(
    userId: string,
    organisationApplicationId?: string,
  ): Promise<void> {
    try {
      const slackChannel: string = this.config.get('slack.channel');

      const user = await this.userRepository.findOneOrFail({
        where: { id: userId },
      });
      let organisationName: string;

      if (organisationApplicationId) {
        organisationName = (
          await this.organisationRepository.findOneOrFail({
            where: { id: organisationApplicationId },
          })
        )?.name;
      }

      const fromOrganisation = organisationName
        ? ` from ${organisationName}`
        : '';
      const payload = {
        text: `${user.firstName} ${user.lastName}${fromOrganisation} has signed into TalkToLoop.org for the first time`,
      };
      await axios.post(slackChannel, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      this.customLogger.error(`slackMessageError: ${error.message}`);
    }
  }
}
