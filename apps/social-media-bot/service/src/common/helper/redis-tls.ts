import { getRedisURL } from '@ourloop/shared';
import { RedisConfig } from '../../config/default';

export type RedisConfigWithTls = RedisConfig & { tls?: Record<string, unknown> };

/** ElastiCache in-transit: use `rediss://` when `redis.tls` is set (same pattern as ivrr-bot). */
export function redisUrlWithTls(redisConfig: RedisConfigWithTls): string {
  let url = getRedisURL(redisConfig);
  if (redisConfig.tls && /^redis:\/\//i.test(url)) {
    url = url.replace(/^redis:\/\//i, 'rediss://');
  }
  return url;
}

/** TLS socket options for node-redis, ioredis, and Nest Redis transport. */
export function redisTlsOptions(
  redisConfig: RedisConfigWithTls,
): Record<string, unknown> | undefined {
  if (!redisConfig.tls) {
    return undefined;
  }
  return { rejectUnauthorized: false, ...redisConfig.tls };
}
