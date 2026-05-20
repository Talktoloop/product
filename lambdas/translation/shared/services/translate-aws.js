const {
  TranslateClient,
  TranslateTextCommand,
} = require('@aws-sdk/client-translate');
const {
  ComprehendClient,
  BatchDetectDominantLanguageCommand,
} = require('@aws-sdk/client-comprehend');
const { logInfo, logError } = require('../helpers/logger');

/**
 * AWS Translate-backed translator. Detects the dominant language first via
 * Comprehend, then issues the translation. Behaviour ported from
 * `src/translate/services/translate.aws.service.ts`.
 */

const region = process.env.AWS_REGION || 'eu-central-1';
const translateClient = new TranslateClient({ region });
const comprehendClient = new ComprehendClient({ region });

class TranslateByAwsService {
  async translate(originalText, originalTextLang, targetLanguageCode, throwErrorIfIncorrectLanguage) {
    const detected = await this.languageDetection(originalText);
    if (detected !== originalTextLang) {
      logInfo(`Incorrect text language: detected ${detected}, received ${originalTextLang}`);
      if (throwErrorIfIncorrectLanguage) {
        throw new Error('Incorrect text language detected');
      }
      return null;
    }

    try {
      const response = await translateClient.send(
        new TranslateTextCommand({
          Text: originalText,
          SourceLanguageCode: originalTextLang || 'auto',
          TargetLanguageCode: targetLanguageCode,
        }),
      );
      return response;
    } catch (error) {
      logError('AWS Translate text error', error);
      if (throwErrorIfIncorrectLanguage) throw error;
      return null;
    }
  }

  async languageDetection(originalText) {
    const response = await comprehendClient.send(
      new BatchDetectDominantLanguageCommand({ TextList: [originalText] }),
    );
    const result = response && response.ResultList && response.ResultList[0];
    if (!result || !result.Languages || !result.Languages[0]) {
      throw new Error('Unable to detect dominant language');
    }
    return result.Languages[0].LanguageCode;
  }
}

module.exports = { TranslateByAwsService };
