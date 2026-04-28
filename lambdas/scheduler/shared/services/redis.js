const { createClient } = require('redis');
const { v4: uuidv4 } = require('uuid');
const { logInfo, logError } = require('../helpers/logger');

/**
 * Redis pub/sub helper used by ivrr_scheduler / ivrr_clear_history /
 * gateway_scheduler. Publishes a NestJS-style microservice command and
 * resolves with the subscriber's first reply (or rejects on timeout).
 *
 * Topic shape: '{"cmd":"<cmd>"}'  /  reply on '{"cmd":"<cmd>"}.reply'
 */

class RedisProvider {
  constructor() {
    const schema = process.env.REDIS_SCHEMA || 'redis';
    const password = process.env.REDIS_PASSWORD || '';
    const host = process.env.REDIS_HOST || '';
    const port = process.env.REDIS_PORT || '6379';
    this.client = createClient({
      url: `${schema}://:${password}@${host}:${port}`,
    });
    this.connection = this.client.connect();
  }

  /**
   * @param {object|undefined} body - payload sent under `data`
   * @param {string} cmd - command name
   * @param {number} timeoutMs - reject if no reply arrives in this window
   */
  async publishMessage(body, cmd, timeoutMs = 10000) {
    await this.connection;

    const topic = JSON.stringify({ cmd });
    const replyChannel = `${topic}.reply`;
    const message = {
      pattern: { cmd },
      data: body,
      id: uuidv4(),
    };

    const subscriber = this.client.duplicate();
    await subscriber.connect();

    return new Promise((resolve, reject) => {
      const timer = setTimeout(async () => {
        await subscriber.quit().catch(() => {});
        reject(new Error(`Redis publishMessage(${cmd}) timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      subscriber
        .subscribe(replyChannel, async (raw) => {
          clearTimeout(timer);
          logInfo(`Redis reply on ${replyChannel}`, raw);
          try {
            resolve(JSON.parse(raw));
          } catch (parseError) {
            reject(parseError);
          } finally {
            await subscriber.quit().catch(() => {});
          }
        })
        .then(() => this.client.publish(topic, JSON.stringify(message)))
        .catch((error) => {
          clearTimeout(timer);
          logError('Redis publishMessage error', error);
          subscriber.quit().catch(() => {});
          reject(error);
        });
    });
  }
}

module.exports = { RedisProvider };
