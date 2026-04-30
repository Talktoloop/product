const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { DbService } = require('./shared/services/db');
const { TranslateService } = require('./shared/services/translate');
const { hopsIterator } = require('./shared/utils/hop');
const { validateTranslateEvent } = require('./shared/validators/event');

/**
 * Single-translation Lambda. Invoked synchronously or asynchronously by
 * other code (translate_history_content, transcribe). Translates one piece
 * of content from `originalTextLang` → `target` via the configured provider
 * (AWS or Google), with multi-hop intermediate-language support.
 *
 * Behaviour ported verbatim from `src/translate/app.ts`.
 */
exports.handler = async (event) => {
  eventLogger(event);

  await validateTranslateEvent(event);

  const {
    sourceId,
    sourceType,
    target,
    originalText,
    originalTextLang,
    languageId,
    hopsConfig,
    provider,
    alternativeProvider,
  } = event;

  const db = new DbService();

  try {
    const hops = hopsIterator(originalTextLang, target, hopsConfig);
    logInfo(`Translating [${sourceType}-${sourceId}] from ${originalTextLang} to ${target} via ${provider}`, { hops });

    const translation = new TranslateService();
    const result = await translation.hopsTranslation(
      hops,
      originalText,
      originalTextLang,
      target,
      provider,
      alternativeProvider,
    );

    if (result && result.TranslatedText) {
      await db.saveTranslationStatusWithoutContent(sourceType, sourceId, languageId);
      await db.saveTranslationToDB(sourceType, result.TranslatedText, sourceId, languageId);
    } else {
      await db.saveTranslationError(sourceType, sourceId, languageId);
    }

    return {
      body: JSON.stringify({ message: result }),
    };
  } catch (error) {
    logError('translate Lambda error', error);
    try {
      await db.saveTranslationError(sourceType, sourceId, languageId);
    } catch (saveError) {
      logError('failed to record translation error', saveError);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Translation failed', error: error.message }),
    };
  } finally {
    await db.closeConnection();
  }
};
