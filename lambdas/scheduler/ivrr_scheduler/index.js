const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { RedisProvider } = require('./shared/services/redis');

const REPLY_TIMEOUT_MS = 6000;

/**
 * Wakes up the IVR service every 5 minutes via Redis pub/sub command
 * `checkPendingCalls`. The IVR service has a corresponding @MessagePattern
 * handler that dials the next batch of pending outbound calls.
 */
exports.handler = async (event) => {
  eventLogger(event);

  const redis = new RedisProvider();

  try {
    const result = await redis.publishMessage(undefined, 'checkPendingCalls', REPLY_TIMEOUT_MS);
    if (!result) {
      logInfo('checkPendingCalls returned no result');
      return { handled: false };
    }
    logInfo('checkPendingCalls result', result);
    return { handled: true, result };
  } catch (error) {
    logError('ivrr_scheduler publish error', error);
    return { handled: false, error: error.message };
  }
};
