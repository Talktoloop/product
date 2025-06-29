import {
  Inject,
  Injectable,
  Logger,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { WhatsappProvider } from '../../common/interface/whatsapp-provider.interface';
import { ApplicationConfig } from '../../config/default';
import { DICTIONARY } from '../../common/enum/dictionary.enum';

@Injectable()
export class TwilioWebhookMiddleware implements NestMiddleware {
  private readonly logger: Logger = new Logger(TwilioWebhookMiddleware.name);

  constructor(
    @Inject(DICTIONARY.WHATSAPP)
    private readonly whatsappProvider: WhatsappProvider,
    private readonly config: ConfigService,
  ) {}

  use(req: Request, _: Response, next: NextFunction) {
    const twilioSignature = req.headers['x-twilio-signature']?.toString();
    const params = req.body;

    const fullUrl = `https://${req.hostname}${req.originalUrl}`;

    const {
      whatsapp: { authToken },
    } = this.config.get<ApplicationConfig>('application');

    const validate = this.whatsappProvider.twilio.validateRequest(
      authToken,
      twilioSignature,
      fullUrl,
      params,
    );

    if (!validate) {
      const errPayload = new UnauthorizedException('Token invalid!');
      this.logger.error(
        `TwilioWebhookMiddleware validate token error, validate request params: ${JSON.stringify(
          { twilioSignature, params, fullUrl, authToken },
        )}`,
      );

      next(errPayload);
    }

    next();
  }
}
