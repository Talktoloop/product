const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { RedisProvider } = require('./shared/services/redis');

const REPLY_TIMEOUT_MS = 10000;

/**
 * Daily wake-up to the IVR service via Redis pub/sub `clearIVRRArchiveData`.
 *
 * NOTE: As of migration time, the IVR service handler at
 * ivrr-bot/src/scheduler/scheduler.controller.ts:46 is short-circuited
 * (immediate `return { success: false }` before the cleanup logic runs).
 * Migrating the trigger anyway so it's ready when the IVR side is re-enabled.
 *
 * Topic name comes from the EventBridge rule (legacy used `clearIVRRArchiveData`).
 */
exports.handler = async (event) => {
  eventLogger(event);

  const topic = (event && event.topic) || 'clearIVRRArchiveData';
  const redis = new RedisProvider();

  try {
    const result = await redis.publishMessage(undefined, topic, REPLY_TIMEOUT_MS);
    logInfo(`${topic} result`, result);
    return result || { success: false };
  } catch (error) {
    logError('ivrr_clear_history publish error', error);
    return { success: false, error: error.message };
  }
};
