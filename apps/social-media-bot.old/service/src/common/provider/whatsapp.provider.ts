import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '../../config/default';
import * as twilio from 'twilio';
import { DICTIONARY } from '../enum/dictionary.enum';
import { TwilioValidateRequest } from '../interface/whatsapp-provider.interface';
import { Provider } from '../enum/provider.enum';

class Whatsapp {
  private readonly logger: Logger = new Logger(Whatsapp.name);
  public client: twilio.Twilio;
  public twilio: TwilioValidateRequest;

  constructor(private readonly config: ConfigService) {
    const {
      whatsapp: { accountSid, authToken },
    } = this.config.get<ApplicationConfig>('application');

    if (
      this.config.get('application.providerName') === Provider.WHATSAPP &&
      accountSid
    ) {
      this.client = new twilio.Twilio(accountSid, authToken);
      this.twilio = twilio as TwilioValidateRequest;
    }
  }
}

export const WhatsappProvider: FactoryProvider<any> = {
  provide: DICTIONARY.WHATSAPP,
  useFactory: (configService: ConfigService) => new Whatsapp(configService),
  inject: [ConfigService],
};
