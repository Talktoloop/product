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
      // console.log('Sending email');
      return super.sendEmail(
        templateId,
        variablesToEscapeAndSend,
        variablesToSend,
        to,
        attachments,
        from,
        // replyTo,
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

  async sendReportEmail(data: {
    reportType: string;
    postId: string;
    guidelineBreaches: string[];
    replySpecification?: string;
    additionalInfo?: string;
    contactEmail?: string;
  }): Promise<LibraryResponse<any>> {
    const breachesList = data.guidelineBreaches
      .map((b) => `- ${b}`)
      .join('<br/>');

    const feedbackUrl = `https://app.talktoloop.org/story/details/${data.postId}`;

    const message = [
      `<strong>Report Type:</strong> ${data.reportType}`,
      `<strong>Post ID:</strong> ${data.postId}`,
      `<strong>Link to feedback:</strong> <a href="${feedbackUrl}">${feedbackUrl}</a>`,
      data.replySpecification
        ? `<strong>Reply Specification:</strong> ${data.replySpecification}`
        : null,
      `<strong>Community Guidelines Breached:</strong><br/>${breachesList}`,
      data.additionalInfo
        ? `<strong>Additional Information:</strong> ${data.additionalInfo}`
        : null,
      data.contactEmail
        ? `<strong>Contact Email:</strong> ${data.contactEmail}`
        : null,
    ]
      .filter(Boolean)
      .join('<br/><br/>');

    const reportEmail =
      this.config.get('reportEmail') || 'mai@talktoloop.org';

    const reportPromise = this.sendEmail(
      EMAIL_TEMPLATES.SUPPORT_TEAM_NOTIFICATION,
      {
        error_details: message,
      },
      {},
      reportEmail.split(',').map((email: string) => ({
        Email: email.trim(),
      })),
    );

    if (data.contactEmail) {
      const confirmationMessage = `
        <p>Thank you for submitting your report.</p>
        <p>Your report is being investigated. We will review your request and treat it confidentially within 1 work week.</p>
        <p><strong>Reported content</strong>
        <br/>
        Click <a href="${feedbackUrl}">here</a> to view or copy the link below in the browser
        <a href="${feedbackUrl}">${feedbackUrl}</a></p>
      `;

      this.sendEmail(
        EMAIL_TEMPLATES.SUPPORT_TEAM_NOTIFICATION,
        {
          error_details: confirmationMessage,
        },
        {},
        [{ Email: data.contactEmail }],
      ).catch((err) => {
        this.customLogger.error(
          `sendReportConfirmationEmail: ${err.message}`,
        );
      });
    }

    return reportPromise;
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

  async sendFeedbackErrorSlackNotification(
    storyId: string,
    error: string,
  ): Promise<void> {
    try {
      const webhookUrl: string = this.config.get('slack.feedbackErrorChannel');
      if (!webhookUrl) return;

      const payload = {
        text: `🚨 Feedback save failed\n• Story ID: ${storyId}\n• Error: ${error}`,
      };

      await axios.post(webhookUrl, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      this.customLogger.error(
        `sendFeedbackErrorSlackNotification: ${err.message}`,
      );
    }
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
