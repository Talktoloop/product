import { getRedisURL } from '@ourloop/shared';
import { RedisConfig } from '../../config/default';

export type RedisConfigWithTls = RedisConfig & { tls?: Record<string, unknown> };

export function redisUrlWithTls(redisConfig: RedisConfigWithTls): string {
  let url = getRedisURL(redisConfig);
  if (redisConfig.tls && /^redis:\/\//i.test(url)) {
    url = url.replace(/^redis:\/\//i, 'rediss://');
  }
  return url;
}

export function redisTlsOptions(
  redisConfig: RedisConfigWithTls,
): Record<string, unknown> | undefined {
  if (!redisConfig.tls) {
    return undefined;
  }
  return { rejectUnauthorized: false, ...redisConfig.tls };
}
