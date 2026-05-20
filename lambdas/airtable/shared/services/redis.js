const { createClient } = require('redis');
const { v4: uuidv4 } = require('uuid');
const { resolveSecret } = require('./secrets');
const { logInfo, logError } = require('../helpers/logger');

/**
 * Connects to Redis and provides a request/reply pub-sub helper used by
 * `user_invite` to publish a `sendInvitationToUser` command and await the
 * subscriber's reply on the corresponding `.reply` channel.
 */
class RedisService {
  constructor() {
    this.connection = (async () => {
      const schema = process.env.REDIS_SCHEMA || 'rediss';
      const password = await resolveSecret('SECRETS_REDIS_PASSWORD');
      const host = process.env.REDIS_HOST || '';
      const port = process.env.REDIS_PORT || '6379';
      this.client = createClient({
        url: `${schema}://:${password}@${host}:${port}`,
      });
      await this.client.connect();
    })();
  }

  /**
   * Publishes a NestJS-style microservice command and resolves with the
   * subscriber's first reply (or rejects on timeout).
   *
   * @param {object} body - payload sent under the `data` key
   * @param {string} cmd - command name; subscriber listens on `{"cmd":"<cmd>"}`
   * @param {number} timeoutMs - reject if no reply arrives in this window
   */
  async publishMessage(body, cmd, timeoutMs = 5000) {
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
        reject(new Error(`Redis publishMessage timed out after ${timeoutMs}ms`));
      }, timeoutMs);

      subscriber
        .subscribe(replyChannel, async (raw) => {
          clearTimeout(timer);
          logInfo(`Redis reply received on ${replyChannel}`, raw);
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

module.exports = { RedisService };
