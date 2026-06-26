// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { APP_VERSION } from '@env/app.version';
import { Environment } from '@shared/enums/environment.enum';
import { TRANSLATIONS_VERSION } from './translations.version';

export const environment = {
  name: Environment.Local,
  production: false,
  version: APP_VERSION,
  translations: {
    defaultLanguage: 'en',
    defaultLanguageId: 1,
    version: TRANSLATIONS_VERSION,
  },
  includeE2E: true,
  registerUrl: 'https://airtable.com/shrTL1QDvmskKmCSy',
  landingPageUrl: 'https://talktoloop.org/',
  gaTrackingCode: '',
  posthog_key: '***REMOVED***',
  posthog_host: 'https://eu.i.posthog.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
