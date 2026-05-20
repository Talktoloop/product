import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBot from 'node-telegram-bot-api';
import { DICTIONARY } from '../enum/dictionary.enum';
import { Provider } from '../enum/provider.enum';

export const TelegramProvider: FactoryProvider<any> = {
  provide: DICTIONARY.TELEGRAM,
  useFactory: (configService: ConfigService) => {
    if (configService.get('application.providerName') !== Provider.TELEGRAM) {
      return;
    }

    return configService
      .get('application.telegram.channels')
      .map((channel) => new TelegramBot(channel.token, { webHook: true }));
  },
  inject: [ConfigService],
};
