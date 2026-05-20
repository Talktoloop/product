const { TranslationServiceClient } = require('@google-cloud/translate');
const { resolveSecret } = require('./secrets');
const { logInfo } = require('../helpers/logger');

/**
 * Google Cloud Translate v3 client. Behaviour ported from
 * `src/translate/services/translate.google.service.ts`.
 *
 * Reads service account JSON from Secrets Manager (env var
 * `SECRETS_GOOGLE_CREDENTIALS`) instead of a plain env var.
 */

const PROJECT_ID = process.env.GOOGLE_PROJECT_ID;
const LOCATION = process.env.GOOGLE_TRANSLATION_LOCATION || 'global';

// Some Google language codes differ from our internal codes — map at the edge.
const LANGUAGE_CODE_MAP = { tl: 'fil' };

let _clientPromise = null;
async function getClient() {
  if (!_clientPromise) {
    _clientPromise = (async () => {
      const credentialsJson = await resolveSecret('SECRETS_GOOGLE_CREDENTIALS');
      const credentials = JSON.parse(credentialsJson);
      return new TranslationServiceClient({ credentials });
    })();
  }
  return _clientPromise;
}

class TranslateByGoogleService {
  async translate(originalText, originalTextLang, targetLanguageCode, throwErrorIfIncorrectLanguage) {
    const client = await getClient();
    const parent = `projects/${PROJECT_ID}/locations/${LOCATION}`;

    // Pre-detect language to catch mis-tagged content
    const detected = await this.detectLanguage(client, parent, originalText);
    const expected = [originalTextLang, LANGUAGE_CODE_MAP[originalTextLang]].filter(Boolean);
    if (!detected || !expected.includes(detected)) {
      logInfo(`Incorrect text language: detected ${detected}, received ${originalTextLang}`);
      if (throwErrorIfIncorrectLanguage) {
        throw new Error('Incorrect text language detected');
      }
      return null;
    }

    const [response] = await client.translateText({
      parent,
      contents: [originalText],
      mimeType: 'text/plain',
      sourceLanguageCode: detected,
      targetLanguageCode,
    });
    const translatedText = response.translations[0].translatedText;
    return { TranslatedText: translatedText };
  }

  async detectLanguage(client, parent, content) {
    const [response] = await client.detectLanguage({ parent, content });
    return response && response.languages && response.languages[0] && response.languages[0].languageCode;
  }
}

module.exports = { TranslateByGoogleService };
