import { FactoryProvider } from '@nestjs/common';
import { DI_CONSTANTS } from '../constant/di.constant';
import { TranslationServiceClient } from '@google-cloud/translate';
import { ConfigService } from '@nestjs/config';

export const GoogleTranslationServiceProvider: FactoryProvider<TranslationServiceClient> = {
  provide: DI_CONSTANTS.GOOGLE_TRANSLATION,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const credentials = config.get('translation.google.credentials');
    return new TranslationServiceClient({ credentials });
  },
};
