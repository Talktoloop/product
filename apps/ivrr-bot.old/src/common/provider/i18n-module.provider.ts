import { ConfigService } from '@nestjs/config';
import { I18nAsyncOptions, I18nJsonLoader, HeaderResolver } from 'nestjs-i18n';
import path from 'path';
import { DEFAULT_LANG } from '../../const/config';

export const I18nModuleProvider: I18nAsyncOptions = {
  useFactory: (configService: ConfigService) => {
    const langs = configService.get<Array<string>>('availableLanguages');
    const fallbacks = {};
    langs.forEach((lang) => {
      fallbacks[`${lang}-*`] = lang;
    });

    return {
      fallbackLanguage: DEFAULT_LANG,
      fallbacks,
      loaderOptions: {
        path: path.join(__dirname, '../../i18n/'),
        watch: true,
      },
    };
  },
  resolvers: [new HeaderResolver(['content-language'])],
  loader: I18nJsonLoader,
  inject: [ConfigService],
};
