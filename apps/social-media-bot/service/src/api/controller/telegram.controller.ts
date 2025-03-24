import {
  Body,
  Controller,
  Post,
  Logger,
  HttpStatus,
  Res,
  Param,
} from '@nestjs/common';
import TelegramIncomingMessageInterface from '../../common/interface/telegram-inoming_message';
import { WebhookService } from '../service/webhook.service';
import { Response } from 'express';
import { Provider } from '../../common/enum/provider.enum';

@Controller(`${Provider.TELEGRAM}bot/api/v1`)
export class TelegramController {
  private readonly logger: Logger = new Logger(TelegramController.name);

  constructor(private readonly webhookService: WebhookService) {}

  @Post('webhook/:channel')
  async handleTelegramRequest(
    @Body()
    body: { update_id: number; message: TelegramIncomingMessageInterface },
    @Param('channel') channel: string,
    @Res() response: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    this.logger.log(`Process handleWebhook: ${JSON.stringify(body)}`);

    this.webhookService.handleWebhook({
      ...body.message,
      channel,
    });

    return response.status(HttpStatus.OK).send();
  }
}
