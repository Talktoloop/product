const {
  LambdaClient,
  InvokeCommand,
  InvokeAsyncCommand,
} = require('@aws-sdk/client-lambda');
const { TranslateByAwsService } = require('./translate-aws');
const { TranslateByGoogleService } = require('./translate-google');
const { logInfo, logError } = require('../helpers/logger');
const {
  ProviderType,
  LanguageTranslatableByGoogle,
} = require('../constants');

/**
 * Orchestrates translation across AWS Translate + Google Translate, including
 * the multi-hop "translate via intermediate language" flow.
 *
 * Behaviour ported verbatim from `src/translate/services/translate.service.ts`.
 */

const AWS_CONTENT_LENGTH_LIMIT = parseInt(process.env.AWS_CONTENT_LENGTH_LIMIT || '6000', 10);
const lambdaClient = new LambdaClient({
  region: process.env.AWS_REGION || 'eu-central-1',
});

class TranslateService {
  async hopsTranslation(hops, originalText, originalTextLang, targetLanguageCode, provider, alternativeProvider) {
    let text = originalText;
    let target = hops.length > 0 ? hops[0] : targetLanguageCode;
    let textLang = originalTextLang;

    if (hops && hops.length) {
      for (let index = 0; index < hops.length; index += 1) {
        let result = await this.translateText(text, textLang, target, provider, false);
        logInfo(`Hop[${index}] result`, result);

        if (result && result.TranslatedText) {
          text = result.TranslatedText;
          textLang = hops[index];
          target = index < hops.length - 1 ? hops[index + 1] : targetLanguageCode;
        } else if (alternativeProvider) {
          result = await this.translateText(text, textLang, target, alternativeProvider, false);
          logInfo(`Hop[${index}] alt-provider result`, result);
          if (result && result.TranslatedText) {
            text = result.TranslatedText;
            textLang = hops[index];
            target = index < hops.length - 1 ? hops[index + 1] : targetLanguageCode;
          }
        }
      }
    }

    const finalResult = await this.translateText(text, textLang, target, provider, false);
    if ((finalResult && finalResult.TranslatedText) || !alternativeProvider) {
      return finalResult;
    }
    return this.translateText(text, textLang, target, alternativeProvider, false);
  }

  async translateText(originalText, originalTextLang, targetLanguageCode, provider, throwErrorIfIncorrectLanguage = true) {
    // AWS has a content length limit; over the limit, prefer Google.
    // Also Google must be used when the target isn't in AWS' supported set.
    const targetSupportedByGoogleOnly = !Object.values(LanguageTranslatableByGoogle).includes(targetLanguageCode);
    const canBeUsedAws = originalText.length <= AWS_CONTENT_LENGTH_LIMIT || !targetSupportedByGoogleOnly;

    if (provider === ProviderType.AWS && canBeUsedAws) {
      const aws = new TranslateByAwsService();
      return aws.translate(originalText, originalTextLang, targetLanguageCode, throwErrorIfIncorrectLanguage);
    }
    if (provider === ProviderType.GOOGLE || !canBeUsedAws) {
      const google = new TranslateByGoogleService();
      return google.translate(originalText, originalTextLang, targetLanguageCode, throwErrorIfIncorrectLanguage);
    }
    return null;
  }

  async runTranslation(sourceId, sourceType, target, originalText, originalTextLang, languageId, provider, alternativeProvider, lambdaName) {
    const payload = {
      sourceId,
      sourceType,
      target,
      originalText,
      originalTextLang,
      languageId,
      hopsConfig: [],
      provider,
      alternativeProvider,
    };
    logInfo('runTranslation payload', payload);

    try {
      await lambdaClient.send(
        new InvokeAsyncCommand({
          FunctionName: lambdaName,
          InvokeArgs: JSON.stringify(payload),
        }),
      );
    } catch (error) {
      logError('Invoke translation lambda error', error);
    }
  }

  async runTranslationLambdaSync(sourceId, content, originalTextLang, sourceType, provider, alternativeProvider, lambdaName) {
    const payload = {
      sourceId,
      sourceType,
      originalText: content,
      originalTextLang,
      target: 'en',
      languageId: 1,
      hopsConfig: [],
      provider,
      alternativeProvider,
    };
    logInfo(`Sync translation invoke from ${originalTextLang} to EN via ${provider}`);

    return lambdaClient.send(
      new InvokeCommand({
        FunctionName: lambdaName,
        Payload: Buffer.from(JSON.stringify(payload)),
      }),
    );
  }
}

module.exports = { TranslateService };
