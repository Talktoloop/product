import { Environment } from '@shared/enums/environment.enum';
import { APP_VERSION } from './app.version';
import { TRANSLATIONS_VERSION } from './translations.version';

export const environment = {
  name: Environment.Staging,
  production: true,
  version: APP_VERSION,
  translations: {
    defaultLanguage: 'en',
    defaultLanguageId: 1,
    version: TRANSLATIONS_VERSION,
  },
  includeE2E: true,
  registerUrl: 'https://airtable.com/shrnAhKGNfOLIdFCV',
  gaTrackingCode: '',
};
