import { ConfigService } from '@nestjs/config';
import { I18nAsyncOptions, I18nJsonLoader, HeaderResolver } from 'nestjs-i18n';
import path = require('path');
import { ApplicationConfig } from '../../config/default';
import { DEFAULT_LANG } from '../../common/constant/default-lanugage.constant';
import { FacebookPageConfigInterface } from '../../common/interface/facebook-page-config';

export const I18nModuleProvider: I18nAsyncOptions = {
  useFactory: (configService: ConfigService) => {
    const config = configService.get<ApplicationConfig>('application');
    const pageConfigs = config.facebook.pages;
    const langs = [];

    pageConfigs.forEach((config: FacebookPageConfigInterface) => {
      const pageLangs = config.supportedLanguages.map(
        (language) => language.lang,
      );
      langs.push(...pageLangs);
    });

    const fallbacks = {};
    [...new Set(langs)].forEach((lang) => {
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
