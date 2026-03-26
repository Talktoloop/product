import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger, forwardRef } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  getUserStoryTwilioCallSid,
  UserFlowRecord,
} from '../../common/interface/user-flow-record';
import { TwilioService } from '../../call/service/twilio.service';
import { StorageService } from '../../storage/storage.service';
import { QUEUE_CONSTANT } from '../../queue/constant/queue.constant';
import { Queue, Job } from 'bull';
import { ApplicationConfig } from '../../config/default';
import { ConfigService } from '@nestjs/config';
import { QueueService } from '../../queue/queue.service';
import { S3Service } from '@ourloop/shared';
import { ApiClientService } from './api-client.service';
import TwilioRecordAudioWebhookRequest from '../../common/interface/twilio-record-audio-webhook-request';
import { CallInstance } from 'twilio/lib/rest/api/v2010/account/call';
import TwilioCallData from '../../common/interface/twilio-call-data-webhook-request';
import { checkIfResourceNotFound } from '../helper/resource-not-found';

@Injectable()
export class WebhookService {
  private readonly logger: Logger = new Logger(WebhookService.name);
  private applicationConfig: ApplicationConfig;

  constructor(
    private readonly storageService: StorageService,
    private readonly httpService: HttpService,
    @Inject(forwardRef(() => TwilioService))
    private readonly twilioService: TwilioService,
    private readonly s3Service: S3Service,
    @Inject(forwardRef(() => ApiClientService))
    private readonly apiClientService: ApiClientService,
    @Inject(forwardRef(() => QueueService))
    private readonly queueService: QueueService,
    private readonly configService: ConfigService,
    @Inject(QUEUE_CONSTANT.PROCESS_STORY_CALL)
    private processTwilioCallQueue: Queue,
    @Inject(QUEUE_CONSTANT.PROCESS_COMMENT_CALL)
    private processTwilioCommentReplyQueue: Queue,
  ) {
    this.s3Service.setS3Bucket(
      this.configService.get('application.awsS3Bucket'),
    );

    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  async getDataFromTwilio(
    callSid: string,
    onlyCallLog = false,
    flowDataNeeded = true,
  ) {
    let userRecord: UserFlowRecord;
    let flowData: TwilioCallData;
    const callLog: CallInstance = await this.twilioService
      .getTwilioCallLog(callSid)
      .catch((error) => {
        if (!checkIfResourceNotFound(error)) {
          throw new Error(error);
        }

        return null;
      });

    if (!onlyCallLog) {
      flowData = await this.twilioService
        .getFlowDataContext(callSid)
        .catch((error) => {
          if (flowDataNeeded) throw error;

          this.logger.error('getFlowDataContext', error);

          return error;
        });
      userRecord = await this.storageService.getUser(callSid);
    }
    return { callLog, userRecord, flowData };
  }

  async getDataFromTwilioAndProcessData({
    callSid,
    onlyCallLog = false,
    storyCreated,
    callerCountryCode,
  }: {
    callSid: string;
    job: Job<any>;
    onlyCallLog?: boolean;
    storyCreated?: boolean;
    callerCountryCode?: string;
  }) {
    const { callLog, userRecord, flowData } = await this.getDataFromTwilio(
      callSid,
      onlyCallLog,
    );

    if (!callLog || !flowData || !(storyCreated ?? userRecord)) {
      throw new Error('Could not get callLog, flowData or userRecord');
    }

    if (userRecord) {
      await this.addRecordingDurationToUser(callSid, userRecord);
    }

    const updatedRecord = {
      ...userRecord,
      ...flowData,
      country: callerCountryCode,
    };

    await this.storageService.updateUserData(updatedRecord);

    let sendResult: Record<string, unknown>;

    if (!storyCreated) {
      sendResult =
        await this.apiClientService.sendTwilioStoryToApi(updatedRecord);
    }

    return { callLog, userRecord, sendResult };
  }

  async sendNotCompletedStoryToApi(
    callSid: string,
  ): Promise<Record<string, unknown>> {
    try {
      const userRecord = await this.storageService.getUser(callSid);

      if (userRecord) {
        await this.addRecordingDurationToUser(callSid, userRecord);
        return await this.apiClientService.sendTwilioStoryToApi(userRecord);
      } else {
        this.logger.warn(`No user record found for callSid: ${callSid}`);
        return await this.apiClientService.sendTwilioStoryToApi(undefined);
      }
    } catch (error) {
      this.logger.error(`Error in sendNotCompletedStoryToApi for callSid: ${callSid}`, error);
    }
  }

  async removeLogs(
    callSid: string,
    callLog: CallInstance,
    userRecord?: UserFlowRecord,
  ) {
    const recordings = await callLog.recordings().list();

    await Promise.all([
      ...recordings.map(
        async (record) => await this.twilioService.removeRecord(record.sid),
      ),
      await this.twilioService
        .removeCallLogFromTwilio(callSid)
        .catch((error) => {
          if (!checkIfResourceNotFound(error)) {
            throw new Error(error);
          }
        }),
      await this.twilioService.removeFlowExecutionLogFromTwilio(callLog),
    ]);

    if (userRecord) {
      await this.storageService.purgeCurrentMessageFlowData(
        getUserStoryTwilioCallSid(userRecord),
      );
    }
  }

  async handleLoopReplyCall({
    resourceId,
    body,
    isCommentReply = false,
  }: {
    resourceId: string;
    body: TwilioRecordAudioWebhookRequest;
    isCommentReply?: boolean;
  }) {
    await this.queueService.addQueueJob({
      queue: this.processTwilioCommentReplyQueue,
      jobName: QUEUE_CONSTANT.PROCESS_COMMENT_CALL,
      data: {
        key: body.CallSid,
        resourceId,
        isCommentReply,
        recordingUrl: body.RecordingUrl,
        attempt: 1,
      },
      jobId: body.CallSid,
      jobDelayInSeconds: 0,
    });
  }

  async scheduleCallHangup(callSid: string): Promise<void> {
    try {
      this.logger.log(`    [HANGUP_AFTER_LIMIT] Scheduling cutoff for ${callSid}`);
      await this.queueService.addQueueJob({
        queue: this.processTwilioCallQueue,
        jobName: QUEUE_CONSTANT.HANGUP_AFTER_LIMIT,
        data: { callSid },
        jobId: `${callSid}:hangup`,
        jobDelayInSeconds: 15 * 60,
      });
      this.logger.log(`    [HANGUP_AFTER_LIMIT] Successfully scheduled ${callSid}`);
    } catch (err) {
      this.logger.error(`    [HANGUP_AFTER_LIMIT] Error for ${callSid}: ${err.message}`, err.stack);
    }
  }

  async handleLoopInboundCall(
    body: TwilioRecordAudioWebhookRequest,
  ): Promise<Job<any | void>> {

    const twilioCallLog = await this.twilioService.getTwilioCallLog(
      body.CallSid,
    );
    const callerCountryCode = await this.storageService.getCallerCountry(
      body.CallSid,
    );
    const s3KeyFile = await this.handleFile(twilioCallLog, body.RecordingUrl);
    const userRecord: UserFlowRecord = {
      phoneNumber: twilioCallLog.from,
      shortCodeNumber: twilioCallLog.to,
      calls: [
        {
          twilioCallSid: twilioCallLog.sid,
          s3FileId: s3KeyFile,
          isStory: true,
          isModeratorCall: false,
          callDate: new Date(body.RecordingStartTime),
        },
      ],
    };

    await this.storageService.createUserFlowRecord(userRecord);


    const job = await this.queueService.addQueueJob({
      queue: this.processTwilioCallQueue,
      jobName: QUEUE_CONSTANT.PROCESS_STORY_CALL,
      data: {
        key: body.CallSid,
        attempt: 1,
        callerCountryCode,
        historicalData: false,
      },
      jobId: body.CallSid,
    });

    return job;
  }

  async handleFile(
    twilioCallLog: CallInstance,
    recordingUrl: string,
  ): Promise<string> {
    const audioResponse = await firstValueFrom(
      this.httpService.get(recordingUrl, {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'audio/wav',
        },
      }),
    );

    const audioData = audioResponse.data;

    const s3Result = await this.s3Service.uploadFile(
      twilioCallLog.sid,
      audioData,
      'audio/mpeg',
    );

    if (!s3Result || !s3Result.keyFile) {
      this.logger.error('Upload file error.', recordingUrl);
      return;
    }
    return s3Result.keyFile;
  }

  async addRecordingDurationToUser(
    callSid: string,
    userRecord: UserFlowRecord,
  ): Promise<void> {
    const recordingDuration =
      await this.twilioService.getCallRecordingDuration(callSid);
    if (userRecord.calls?.length > 0) {
      userRecord.calls[userRecord.calls.length - 1].recordingDuration =
        recordingDuration;
    }
  }
}
