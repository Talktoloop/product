import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { FacebookIncomingMessageInterface } from '../../common/interface/facebook-message-request';
import { WebhookService } from '../service/webhook.service';
import { FacebookService } from '../../communicator/service/facebook.service';
import { Provider } from '../../common/enum/provider.enum';

@Controller(`${Provider.FACEBOOK}bot/api/v1`)
export class FacebookController {
  private readonly logger: Logger = new Logger(FacebookController.name);

  constructor(
    private readonly webhookService: WebhookService,
    private readonly facebookService: FacebookService,
  ) {}

  @Post('webhook')
  async handleFaceBookRequest(
    @Body() body: FacebookIncomingMessageInterface,
  ): Promise<void> {
    this.logger.log(`Process handleWebhook: ${JSON.stringify(body)}`);

    this.webhookService.handleWebhook(body);
  }

  @Get('webhook')
  async handleSubscription(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
  ): Promise<string> {
    const isValidQuery = this.facebookService.isValidSubscriptionQuery(
      mode,
      token,
    );

    if (isValidQuery) {
      return challenge;
    }

    throw new ForbiddenException();
  }
}
