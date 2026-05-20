const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { TranslateService } = require('./shared/services/translate');
const { validateTranslateHistoryEvent } = require('./shared/validators/event');

const MIN_CONTENT_LENGTH = 3;
const ITERATION_DELAY_MS = 200;

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Daily batch Lambda that backfills missing translations for stories /
 * comments. Iterates through every visible language, finds untranslated rows,
 * and invokes the `translate` Lambda asynchronously for each.
 *
 * Behaviour ported verbatim from `src/translate-history-content/app.ts`.
 */
exports.handler = async (event) => {
  eventLogger(event);

  await validateTranslateHistoryEvent(event);
  const { type } = event;

  const db = new DbService();
  const translateService = new TranslateService();
  const lambdaName = process.env.TRANSLATE_FUNCTION_NAME;

  try {
    const languages = await db.getListOfLanguages();

    for (const lang of languages) {
      logInfo(`Processing language ${lang.code}`);
      const missingData = await db.getListOfMissingTranslationsForLanguage(lang.id, type);

      if (!missingData || !missingData.length) {
        logInfo(`No missing data for ${lang.code}`);
        continue;
      }

      for (let source of missingData) {
        logInfo(`Processing ${type} ${source.id}: ${source.code} → ${lang.code}`);
        await sleep(ITERATION_DELAY_MS);

        // If the original content is in a non-translatable language (e.g. Nyanja),
        // pivot to a translatable machine translation first.
        if (!source.provider) {
          logInfo(`Non-translatable source ${source.code}, looking for machine translation`);
          const [pivot] = await db.getMachineTranslation(source.id, type);
          source = { ...source, ...pivot };
        }

        // Translate via English when the providers don't match.
        if (source.provider !== lang.provider) {
          const [enTranslation] = await db.getEnglishTranslation(source.id, type);
          if (enTranslation && enTranslation.content !== '') {
            source.content = enTranslation.content;
            logInfo('Using existing English content');
          } else {
            if (!source.content || source.content.trim().length < MIN_CONTENT_LENGTH) {
              logError('Content too short for English translation', source.content);
              continue;
            }
            try {
              const translation = await translateService.runTranslationLambdaSync(
                source.id,
                source.content,
                source.code,
                type,
                source.provider,
                source.alternativeProvider,
                lambdaName,
              );
              source.content = getPayloadFromTranslation(translation);
              logInfo('Translated to English in-line');
            } catch (innerError) {
              logError('runTranslationLambdaSync failed', innerError);
              continue;
            }
          }
          source.code = 'en';
        }

        if (!source.content || source.content.trim().length < MIN_CONTENT_LENGTH) {
          logError('Content too short to translate', source.content);
          continue;
        }

        if (source.code !== lang.code) {
          await translateService.runTranslation(
            source.id,
            type,
            lang.code,
            source.content,
            source.code,
            lang.id,
            lang.provider,
            lang.alternativeProvider,
            lambdaName,
          );
        }
      }
    }

    return {
      body: JSON.stringify({ message: 'History translation content executed successfully' }),
    };
  } catch (error) {
    logError('translate_history_content Lambda error', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'History translation failed', error: error.message }),
    };
  } finally {
    await db.closeConnection();
  }
};

function getPayloadFromTranslation(invocation) {
  try {
    const payloadString = invocation.Payload
      ? Buffer.from(invocation.Payload).toString('utf-8')
      : '';
    if (!payloadString) return '';
    const { body } = JSON.parse(payloadString);
    const parsed = JSON.parse(body);
    return parsed.message && parsed.message.TranslatedText;
  } catch (error) {
    logError('getPayloadFromTranslation parse error', error);
    return '';
  }
}
