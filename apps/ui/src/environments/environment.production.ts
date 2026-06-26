import { Environment } from '@shared/enums/environment.enum';
import { APP_VERSION } from './app.version';
import { TRANSLATIONS_VERSION } from './translations.version';

export const environment = {
  name: Environment.Production,
  production: true,
  version: APP_VERSION,
  translations: {
    defaultLanguage: 'en',
    defaultLanguageId: 1,
    version: TRANSLATIONS_VERSION,
  },
  includeE2E: true,
  registerUrl: 'https://airtable.com/shrTL1QDvmskKmCSy',
  landingPageUrl: 'https://talktoloop.org/',
  gaTrackingCode: 'G-BC678M3KR0',
  posthog_key: '***REMOVED***',
  posthog_host: 'https://eu.i.posthog.com'
};
