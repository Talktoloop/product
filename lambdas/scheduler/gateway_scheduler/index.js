const { eventLogger, logInfo, logError } = require('./shared/helpers/logger');
const { RedisProvider } = require('./shared/services/redis');

const REPLY_TIMEOUT_MS = 10000;

/**
 * Generic Redis pub/sub trigger Lambda. Reads `event.topic` from the
 * EventBridge schedule input and publishes that command to Redis so the
 * gateway service's matching @MessagePattern handler picks it up.
 *
 * NOTE: The legacy production EventBridge rule was commented out (no schedule
 * was active). Migrating the code so the trigger is ready when needed; default
 * Terraform config keeps it disabled (lambda_gateway_scheduler_enabled = false).
 */
exports.handler = async (event) => {
  eventLogger(event);

  const topic = event && event.topic;
  if (!topic) {
    logError('gateway_scheduler invoked without event.topic');
    return { success: false, error: 'Missing event.topic' };
  }

  const redis = new RedisProvider();

  try {
    const result = await redis.publishMessage(undefined, topic, REPLY_TIMEOUT_MS);
    logInfo(`${topic} result`, result);
    return result || { success: false };
  } catch (error) {
    logError('gateway_scheduler publish error', error);
    return { success: false, error: error.message };
  }
};
