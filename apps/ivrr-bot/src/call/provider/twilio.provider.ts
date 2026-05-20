import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '../../config/default';
import twilio from 'twilio';
import { DI_CONSTANT } from '../constant/di.constant';

class Twilio {
  private readonly logger: Logger = new Logger(Twilio.name);
  public twilioClient: twilio.Twilio;
  public twimlClient: typeof twilio.twiml;

  constructor(private readonly config: ConfigService) {
    const { twilioAccSid, twilioAuthToken } =
      this.config.get<ApplicationConfig>('application');

    this.twilioClient = twilio(twilioAccSid, twilioAuthToken);
    this.twimlClient = twilio.twiml;
  }
}

export const TwilioProvider: FactoryProvider<any> = {
  provide: DI_CONSTANT.TWILIO,
  useFactory: (configService: ConfigService) => new Twilio(configService),
  inject: [ConfigService],
};
