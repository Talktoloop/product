import { Inject, Injectable, Logger } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '../config/default';
import {
  getUserStoryTwilioCallSid,
  UserFlowRecord,
} from '../common/interface/user-flow-record';
import { v4 as uuid } from 'uuid';
import { FinishGatherBlockInterface } from '../common/interface/finish-gather-block.interface.ts';

@Injectable()
export class StorageService {
  private applicationConfig: ApplicationConfig;
  private readonly logger: Logger = new Logger(StorageService.name);

  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  async userExists(storyCallLogSid: string): Promise<boolean> {
    return await this.cacheManager.get(
      this.generateUserRecordKey(storyCallLogSid),
    );
  }

  async updateUserData(newUserRecord: UserFlowRecord): Promise<void> {
    const userRecord = await this.getUser(
      getUserStoryTwilioCallSid(newUserRecord),
    );

    return await this.saveUser({
      ...userRecord,
      ...newUserRecord,
    });
  }

  async createUserFlowRecord(profile: UserFlowRecord): Promise<void> {
    return await this.cacheManager.set(
      this.generateUserRecordKey(getUserStoryTwilioCallSid(profile)),
      {
        storyUuid: uuid(),
        flowStartedAt: new Date(),
        phoneNumber: profile.phoneNumber,
        shortCodeNumber: profile.shortCodeNumber,
        hideUserPhoneNumber: false,
        calls: profile.calls,
      } as UserFlowRecord,
    );
  }

  async purgeCurrentMessageFlowData(storyCallLogSid: string): Promise<void> {
    this.cacheManager.del(this.generateUserRecordKey(storyCallLogSid));
  }

  async getUser(storyCallLogSid: string): Promise<UserFlowRecord> {
    const profile = await this.fetchUser(storyCallLogSid);

    return profile;
  }

  async getExpectedCallDuration(twilioCallSid: string): Promise<number> {
    return await this.cacheManager.get(this.generateCallKey(twilioCallSid));
  }

  async saveExpectedCallDuration(
    twilioCallSid: string,
    expectedCallDuration: number,
  ): Promise<void> {
    return await this.cacheManager.set(
      this.generateCallKey(twilioCallSid),
      expectedCallDuration,
      this.applicationConfig.flowTTL,
    );
  }

  async purgeExpectedCallDurationData(twilioCallSid: string): Promise<void> {
    this.cacheManager.del(this.generateCallKey(twilioCallSid));
  }

  async saveFinishBlockTwiml(
    twilioCallSid: string,
    gatherBlockTwimls: FinishGatherBlockInterface,
  ): Promise<void> {
    return await this.cacheManager.set(
      this.generateFinishBlocklKey(twilioCallSid),
      gatherBlockTwimls,
      this.applicationConfig.flowTTL,
    );
  }

  async getFinishBlockTwiml(
    twilioCallSid: string,
  ): Promise<FinishGatherBlockInterface> {
    return await this.cacheManager.get(
      this.generateFinishBlocklKey(twilioCallSid),
    );
  }

  async saveCallerCountry(
    twilioCallSid: string,
    countryCode: string,
  ): Promise<void> {
    return await this.cacheManager.set(
      this.generateCountryKey(twilioCallSid),
      countryCode,
      this.applicationConfig.flowTTL,
    );
  }

  async getCallerCountry(twilioCallSid: string): Promise<string> {
    return await this.cacheManager.get(this.generateCountryKey(twilioCallSid));
  }

  private async saveUser(userRecord: UserFlowRecord): Promise<void> {
    return await this.cacheManager.set(
      this.generateUserRecordKey(getUserStoryTwilioCallSid(userRecord)),
      userRecord,
      this.applicationConfig.flowTTL,
    );
  }

  async setEntry(key: string, value: unknown): Promise<unknown> {
    return this.cacheManager.set(key, value, this.applicationConfig.cacheTTL);
  }

  async getEntry(key: string): Promise<unknown> {
    return this.cacheManager.get(key);
  }

  private async fetchUser(storyCallLogSid: string): Promise<UserFlowRecord> {
    return await this.cacheManager.get(
      this.generateUserRecordKey(storyCallLogSid),
    );
  }

  private generateUserRecordKey(storyCallLogSid: string): string {
    return `user:${storyCallLogSid}`;
  }

  private generateCallKey(twilioCallSid: string): string {
    return `call:${twilioCallSid}`;
  }

  private generateFinishBlocklKey(twilioCallSid: string): string {
    return `twiml:${twilioCallSid}`;
  }

  private generateCountryKey(twilioCallSid: string): string {
    return `country:${twilioCallSid}`;
  }
}
