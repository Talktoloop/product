import { Environment } from '@shared/enums/environment.enum';
import { APP_VERSION } from './app.version';
import { TRANSLATIONS_VERSION } from './translations.version';

export const environment = {
  name: Environment.Development,
  production: false,
  version: APP_VERSION,
  translations: {
    defaultLanguage: 'en',
    defaultLanguageId: 1,
    version: TRANSLATIONS_VERSION,
  },
  includeE2E: true,
  registerUrl: 'https://airtable.com/shrSCXWyRohbDx92K',
  landingPageUrl: 'https://talktoloop.org/',
  gaTrackingCode: '',
  posthog_key: '***REMOVED***',
  posthog_host: 'https://eu.i.posthog.com'
};
