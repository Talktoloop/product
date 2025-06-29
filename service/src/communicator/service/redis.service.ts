import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS_CLIENT') private readonly redisClient: Redis) {}
  
  async checkIfAlreadySent(key: string): Promise<boolean> {
    const exists = await this.redisClient.get(key);
    return !!exists;
  }
  
  // async markAsSentIfNotExists(key: string, ttlSeconds: number): Promise<boolean> {
  //   const result = await this.redisClient.set(key, '1', 'EX', ttlSeconds, 'NX');
  //   return result === 'OK';
  // }
  
  async setModeratorIntroFlag(senderId: string, pageId: string, ttlSeconds: number): Promise<void> {
    const key = `intro_sent:${senderId}:${pageId}`;
    await this.redisClient.set(key, '1', 'EX', ttlSeconds);
  }
  
  async getModeratorIntroFlag(senderId: string, pageId: string): Promise<boolean> {
    const key = `intro_sent:${senderId}:${pageId}`;
    const value = await this.redisClient.get(key);
    return !!value;
  }
  
  async resetModeratorIntroFlag(senderId: string, pageId: string): Promise<void> {
    const key = `intro_sent:${senderId}:${pageId}`;
    await this.redisClient.del(key);
  }
}