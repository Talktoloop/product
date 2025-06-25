import { FactoryProvider } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import { ConfigService } from '@nestjs/config';
import Mailjet from 'node-mailjet';

export const MailJetProvider: FactoryProvider<any> = {
  provide: DI_CONSTANTS.MAIL_JET,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    return Mailjet.apiConnect(
      config.get('mailJet.apiKey'),
      config.get('mailJet.apiSecret'),
    );
  },
};
