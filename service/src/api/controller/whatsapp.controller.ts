import { Body, Controller, Post, Logger } from '@nestjs/common';
import WhatsappMessageRequest from '../../common/interface/whatsapp-message-request';
import WhatsappIncommingMessage from '../../common/interface/whatsapp-incomming-message';
import WhatsappStatusCallback from '../../common/interface/whatsapp-status-callback';
import { WebhookService } from '../service/webhook.service';
import { WhatsappService } from '../../communicator/service/whatsapp.service';
import { StorageService } from '../../storage/storage.service';
import { Provider } from '../../common/enum/provider.enum';

@Controller(`${Provider.WHATSAPP}bot/api/v1`)
export class WhatsappController {
  private readonly logger: Logger = new Logger(WhatsappController.name);

  constructor(
    private readonly webhookService: WebhookService,
    private readonly whatsappService: WhatsappService,
    private readonly storageService: StorageService,
  ) {}

  @Post('webhook')
  async handleWebhook(@Body() body: WhatsappMessageRequest): Promise<void> {
    const incomingMessage: WhatsappIncommingMessage = {
      smsMessageSid: body.SmsMessageSid,
      numMedia: body.NumMedia,
      profileName: body.ProfileName,
      smsSid: body.SmsSid,
      smsStatus: body.SmsStatus,
      body: body.Body,
      pageId: body.To,
      numSegments: body.NumSegments,
      messageSid: body.MessageSid,
      accountSid: body.AccountSid,
      from: body.From,
      mediaUrl: body.MediaUrl0,
      buttonText: body.ButtonText,
      buttonPayload: body.ButtonPayload
    };
    this.logger.log(`Process handleWebhook: ${JSON.stringify(body)}`);

    await this.webhookService.handleWebhook(incomingMessage);
  }

  @Post('callback')
  async handleCallback(@Body() body: WhatsappMessageRequest): Promise<void> {
    const statusCallback: WhatsappStatusCallback = {
      smsSid: body.SmsSid,
      recipientId: body.To,
      messageStatus: body.MessageStatus,
      pageId: body.From,
      errorCode: body.ErrorCode,
    };

    // this.logger.log(`Process handleCallback: ${JSON.stringify(body)}`);

    const isStructuredMessage = body.StructuredMessage === 'true';

    if (statusCallback.messageStatus === 'delivered' && !isStructuredMessage) {
      await this.storageService.setHoldOnSendMessage(
        statusCallback.recipientId,
        statusCallback.pageId,
        false,
      );
      
      // Replacing direct deletion with queuing the task
      await this.storageService.scheduleMessageDeletion({ messageSid: body.MessageSid });
    }
    
    await this.storageService.setMessageDeliveryResult(statusCallback);
  }
}
