import { Inject, Injectable, Logger, forwardRef } from '@nestjs/common';
import { TwilioProvider } from '../../common/interface/twilio.interface';
import { DI_CONSTANT } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig, getTwilioNumberConfig } from '../../config/default';
import { ExecutionContextInstance } from 'twilio/lib/rest/studio/v2/flow/execution/executionContext';
import { ApiClientService } from '../../api/service/api-client.service';
import { CallService } from './call.service';
import { S3Service, COMMENT_STATUS, STORY_STATUS } from '@ourloop/shared';
import { StorageService } from '../../storage/storage.service';
import { SchedulerService } from '../../scheduler/scheduler.service';
import { TwimlService } from './twiml.service';
import {
  CallInstance,
  CallStatus,
} from 'twilio/lib/rest/api/v2010/account/call';
import { RecordingInstance } from 'twilio/lib/rest/api/v2010/account/recording';
import { ExecutionInstance } from 'twilio/lib/rest/studio/v2/flow/execution';
import TwilioCallData from '../../common/interface/twilio-call-data-webhook-request';
import { FinishGatherBlockInterface } from '../../common/interface/finish-gather-block.interface.ts';
import { CreateModeratorCallInterface } from '../../common/interface/create-moderator-call';
import { REPLY_CALL_OPTION } from '../constant/reply-call-option';
import { QueueService } from '../../queue/queue.service';
import { QUEUE_CONSTANT } from '../../queue/constant/queue.constant';
import { Queue } from 'bull';
import { SourceType } from '../../scheduler/enum/source-type.enum';
import { SchedulerStatus } from '../../scheduler/enum/status.enum';
import { TwilioCallStatsInterface } from '../../common/interface/twilio-call-stats.interface';
import { IvrrCallEntity } from '../entity/ivrr-call.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TwilioService {
  private readonly logger: Logger = new Logger(TwilioService.name);
  private applicationConfig: ApplicationConfig;

  constructor(
    @Inject(DI_CONSTANT.TWILIO)
    private readonly twilio: TwilioProvider,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => ApiClientService))
    private readonly apiClientService: ApiClientService,
    @Inject(forwardRef(() => CallService))
    private readonly callService: CallService,
    private readonly s3Service: S3Service,
    private readonly storageService: StorageService,
    private readonly twimlService: TwimlService,
    @Inject(forwardRef(() => SchedulerService))
    private readonly schedulerService: SchedulerService,
    private readonly queueService: QueueService,
    @Inject(QUEUE_CONSTANT.CHECK_USER_ANSWER)
    private checkUserAnswerCall: Queue,
    @InjectRepository(IvrrCallEntity)
    private readonly ivrrCallRepository: Repository<IvrrCallEntity>
  ) {
    this.s3Service.setS3Bucket(
      this.configService.get('application.awsS3Bucket'),
    );
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  async getCallStatistics(): Promise<TwilioCallStatsInterface> {
    const [allInProgressCalls, allRingingCalls, allQueuedCalls] =
      await Promise.all([
        await this.getCallsByParams({
          status: 'in-progress',
        }),
        await this.getCallsByParams({
          status: 'ringing',
        }),
        await this.getCallsByParams({
          status: 'queued',
        }),
      ]);

    const inboundInProgress = allInProgressCalls.filter((call) =>
      call.direction.includes('inbound'),
    ).length;

    const outboundInProgress = allInProgressCalls.filter((call) =>
      call.direction.includes('outbound'),
    ).length;

    const inboundRinging = allRingingCalls.filter((call) =>
      call.direction.includes('inbound'),
    ).length;

    const outboundRinging = allRingingCalls.filter((call) =>
      call.direction.includes('outbound'),
    ).length;

    const inboundQueued = allQueuedCalls.filter((call) =>
      call.direction.includes('inbound'),
    ).length;

    const outboundQueued = allQueuedCalls.filter((call) =>
      call.direction.includes('outbound'),
    ).length;

    const allInbound = inboundInProgress + inboundRinging + inboundQueued;
    const allOutbound = outboundInProgress + outboundRinging + outboundQueued;

    return {
      allActiveCalls: allInbound + allOutbound,
      inbound: {
        all: allInbound,
        inProgress: inboundInProgress,
        ringing: inboundRinging,
        queued: inboundQueued,
      },
      outbound: {
        all: allOutbound,
        inProgress: outboundInProgress,
        ringing: outboundRinging,
        queued: outboundQueued,
      },
    };
  }

  async getCallsByParams(params: {
    status: CallStatus;
    to?: string;
    startTimeAfter?: Date;
    endTimeBefore?: Date;
  }) {
    return await this.twilio.twilioClient.calls.list(params);
  }

  async getFlowDataContext(callLogSid: string): Promise<TwilioCallData> {
    this.logger.debug(`getFlowDataContext - callLogSid: ${callLogSid}`);
    const callLog = await this.getTwilioCallLog(callLogSid);
    this.logger.debug(
      `getFlowDataContext - callLog: ${JSON.stringify(callLog)}`,
    );
    const flowSid = this.getFlowSidByCall(callLog);
    this.logger.debug(`getFlowDataContext - flowSid: ${flowSid}`);
    const phoneNumber = callLog.from;

    const executions = await this.twilio.twilioClient.studio.v2
      .flows(flowSid)
      .executions.list({
        dateCreatedFrom: callLog.dateCreated,
        dateCreatedTo: callLog.dateUpdated,
      });

    this.logger.debug(`getFlowDataContext - executions: ${executions}`);

    const userExecution = this.getLastFlowDataByPhoneNumber(
      executions,
      phoneNumber,
    );

    this.logger.debug(`getFlowDataContext - userExecution: ${userExecution}`);

    if (!userExecution) {
      throw new Error('FlowData failed to get.');
    }

    const flowData = await userExecution.executionContext().get().fetch();

    const flowDataVariables = flowData.context.flow.variables;

    return {
      language: flowDataVariables?.language,
      isSensitiveStory: flowDataVariables?.isSensitiveStory ?? false,
      hideUserPhoneNumber: flowDataVariables?.hideUserPhoneNumber ?? false,
    };
  }

  async getFlowExecutionContext(
    flowSid: string,
    flowExecutionSid?: string,
  ): Promise<ExecutionContextInstance> {
    const flowExecutions = await this.twilio.twilioClient.studio.v2
      .flows(flowSid)
      .executions.list();

    const execution = flowExecutions.filter(
      (execution) => execution.sid === flowExecutionSid,
    )[0];

    return await execution.executionContext().get().fetch();
  }

  async getFlowExecution({
    flowSid,
    flowExecutionSid,
    callLogSid,
  }: {
    flowSid: string;
    flowExecutionSid?: string;
    callLogSid?: string;
  }): Promise<ExecutionInstance> {
    const flowExecutions = await this.twilio.twilioClient.studio.v2
      .flows(flowSid)
      .executions.list();

    let execution: ExecutionInstance;

    if (callLogSid) {
      const callLog = await this.getTwilioCallLog(callLogSid);
      const phoneNumber = callLog.from;
      execution = this.getLastFlowDataByPhoneNumber(
        flowExecutions,
        phoneNumber,
      );
    }

    if (flowExecutionSid) {
      execution = flowExecutions.filter(
        (execution) => execution.sid === flowExecutionSid,
      )[0];
    }

    return execution;
  }

  async initializeCall(
    data: CreateModeratorCallInterface,
  ): Promise<{ call?: CallInstance; callCreated: boolean }> {
    const phoneNumberDetails = getTwilioNumberConfig(data.loopPhoneNumber);

    if (!phoneNumberDetails) {
      this.logger.error(
        `Cannot initialize call: incorrect config! Number ${data.loopPhoneNumber} no exist in ENV/SSM.`,
      );

      return {
        callCreated: false,
      };
    }

    const isNightNow =
      this.schedulerService.checkIfInLocalIsNightNow(phoneNumberDetails);

    if (isNightNow) {
      data.schedulerData = {
        sourceId: data.storyId ?? data.commentId,
        type: data.storyId ? SourceType.STORY : SourceType.COMMENT,
        lang: data.language,
        providerNumber: data.loopPhoneNumber,
        destinationNumber: data.toPhoneNumber,
        timezone: phoneNumberDetails.utcTimeDiff,
        sequenceNumber: data.schedulerData?.sequenceNumber ?? 1,
        status: SchedulerStatus.PENDING,
      };

      await this.schedulerService.scheduleCall(data.schedulerData);

      return {
        callCreated: false,
      };
    }

    if (!data.toPhoneNumber) {
      this.logger.error(
        `Cannot create call: incorrect data.toPhoneNumber: ${data.toPhoneNumber}`,
      );

      await this.schedulerService.setStatusAsFailed(data.schedulerData);

      return {
        callCreated: false,
      };
    }

    const callStatusUrl = `${this.applicationConfig.ivrrServiceUrl}/api/v1/webhook/call-status`;
    const recordingCallback = data.commentId
      ? `${this.applicationConfig.ivrrServiceUrl}/api/v1/webhook/loop-comment-reply/${data.commentId}`
      : `${this.applicationConfig.ivrrServiceUrl}/api/v1/webhook/loop-reply/${data.storyId}`;
    const twiml = this.twimlService.createTwilioXmlCallData(data);

    this.logger.log(
      `Initiating ${data.commentId ? 'comment' : 'story'} notification call - Using SBC: ${phoneNumberDetails.trunkSid ? 'YES' : 'NO'}`,
    );
    this.logger.log(`Status Callback URL: ${callStatusUrl}`);

    const call = await this.twilio.twilioClient.calls.create({
      twiml,
      byoc: phoneNumberDetails.trunkSid ?? undefined,
      to: data.toPhoneNumber,
      from: phoneNumberDetails.twilioPhoneNumber,
      statusCallback: callStatusUrl,
      statusCallbackMethod: 'POST',
      statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
      machineDetection: 'Enable',
      machineDetectionTimeout: 10,
    });

    this.logger.log(`Call created - SID: ${call.sid}, Status: ${call.status}`);

    await this.queueService.addQueueJob({
      queue: this.checkUserAnswerCall,
      jobName: QUEUE_CONSTANT.CHECK_USER_ANSWER,
      data: { key: call.sid, schedulerData: data.schedulerData, attempt: 1 },
      jobDelayInSeconds: this.applicationConfig.checkAnswerCallDelay,
    });

    const recordingDuration = await this.getCallRecordingDuration(call.sid);

    await this.apiClientService.sendTwilioCallToApi(
      data.storyId,
      data.commentId,
      data.toPhoneNumber,
      false,
      {
        twilioCallSid: call.sid,
        isStory: false,
        isModeratorCall: true,
        callDate: new Date(),
        twilioFlowXml: twiml,
        recordingDuration: recordingDuration,
      },
    );

    const excpectedCallDuration =
      await this.callService.calculateExcpectedCallDurationForTwiml(twiml);

    this.logger.debug(
      `Excpected call duration for ${call.sid} is ${excpectedCallDuration} `,
    );

    await this.storageService.saveExpectedCallDuration(
      call.sid,
      excpectedCallDuration,
    );

    if (data.options) {
      let finishGatherObject: FinishGatherBlockInterface;

      switch (data.resourceStatus) {
        case COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL:
          finishGatherObject = {
            digitOne: twiml,
            digitTwo: this.twimlService.getDigitTwoForFinishBlock(
              data.options[REPLY_CALL_OPTION.REPLY_NOW],
              data.options[REPLY_CALL_OPTION.FINISHED_RECORDING],
              recordingCallback,
            ),
            digitThree: this.twimlService
              .getPlayBlock(data.options[REPLY_CALL_OPTION.REPLY_LATER])
              .toString(),
            digitFour: this.twimlService.getDigitFourForFinishBlock(
              data.options[REPLY_CALL_OPTION.UNANSWERED],
            ),
            digitZero: this.twimlService.getDigitFourForFinishBlock(
              data.options[REPLY_CALL_OPTION.FINISHED_RECORDING],
            ),
            schedullerCallData: data.schedulerData,
          };
          break;

        case COMMENT_STATUS.REJECTED:
        case STORY_STATUS.REJECTED:
          finishGatherObject = {
            digitZero: twiml,
            schedullerCallData: data.schedulerData,
          };
          break;
      }

      await this.storageService.saveFinishBlockTwiml(
        call.sid,
        finishGatherObject,
      );
    }

    return { call, callCreated: true };
  }

  async getTwilioCallLog(sid: string): Promise<CallInstance> {
    return await this.twilio.twilioClient.calls(sid).fetch();
  }

  async getRecordingUrl(sid: string): Promise<RecordingInstance> {
    return this.twilio.twilioClient.recordings
      .list({
        callSid: sid,
      })
      .then((result) => result[0]);
  }

  async removeFlowExecutionLogFromTwilio(callLog: CallInstance) {
    const flowSid = this.getFlowSidByCall(callLog);
    const flowEx = await this.getFlowExecution({
      flowSid,
      callLogSid: callLog.sid,
    });

    if (!flowEx) return;

    const result = await flowEx.remove();
    this.logger.debug(
      `Remove execution flow ${flowEx.sid} log from Twilio result: ${result}`,
    );

    return result;
  }

  async removeCallLogFromTwilio(callLogSid: string): Promise<boolean> {
    const twilioCallLog = await this.getTwilioCallLog(callLogSid);

    if (!twilioCallLog) return;

    const result = await twilioCallLog.remove();
    this.logger.debug(
      `Remove call ${callLogSid} log from Twilio result: ${result}`,
    );

    await this.ivrrCallRepository
      .update(
        { twilioCallSid: callLogSid },
        { recordingDuration: null },
      )
      .catch(() => {
        this.logger.debug(
          `Update recording duration for sid: ${callLogSid} error`,
        );
      });

    return result;
  }

  async removeRecord(recordSid: string): Promise<boolean> {
    const twilioRecord = await this.twilio.twilioClient
      .recordings(recordSid)
      .fetch();

    if (!twilioRecord) return;

    const result = await twilioRecord.remove();

    this.logger.debug(
      `Remove record ${recordSid} from Twilio result: ${result}`,
    );

    return result;
  }

  getFlowSidByCall(callLog: CallInstance): string {
    let phoneNumberDetails = getTwilioNumberConfig(callLog.to);

    if (!phoneNumberDetails) {
      phoneNumberDetails = getTwilioNumberConfig(callLog.from);
    }

    return phoneNumberDetails?.inboundFlowId;
  }

  async clearArchiveTwilioData(dateBefore: Date) {
    this.logger.debug('Removing archive twilio data...');

    const PAGE_SIZE = 50;

    let recordingsRemoved = 0;
    let recordingsPage = await this.twilio.twilioClient.recordings.page({
      dateCreatedBefore: dateBefore,
      pageSize: PAGE_SIZE,
    });
    while (recordingsPage) {
      for (const recording of recordingsPage.instances) {
        try {
          await this.twilio.twilioClient.recordings(recording.sid).remove();
          recordingsRemoved++;
        } catch (error) {
          this.logger.debug(
            `Cannot remove recording ${recording.sid}: ${error}`,
          );
        }
      }
      recordingsPage = await recordingsPage.nextPage();
    }
    this.logger.debug(`Recordings removed: ${recordingsRemoved}`);

    let callsRemoved = 0;
    let callsPage = await this.twilio.twilioClient.calls.page({
      startTimeBefore: dateBefore,
      pageSize: PAGE_SIZE,
    });
    while (callsPage) {
      for (const call of callsPage.instances) {
        await this.removeRecord(call.sid).catch((error) =>
          this.logger.debug(
            `Cannot remove record for call ${call.sid}: ${error}`,
          ),
        );
        await this.removeFlowExecutionLogFromTwilio(call).catch((error) =>
          this.logger.debug(
            `Cannot remove flow execution log for call ${call.sid}: ${error}`,
          ),
        );
        await this.removeCallLogFromTwilio(call.sid).catch((error) =>
          this.logger.debug(
            `Cannot remove call log for call ${call.sid}: ${error}`,
          ),
        );
        callsRemoved++;
      }
      callsPage = await callsPage.nextPage();
    }
    this.logger.debug(`Call logs removed: ${callsRemoved}`);

    this.logger.debug('clearArchiveTwilioData: DONE');
  }

  async clearArchiveTwilioS3Files(dateBefore: Date) {
    this.logger.debug('Removing archive s3 audio files...');

    const archiveFiles = (await this.s3Service.listFiles()).Contents.filter(
      (file: { Key?: string; LastModified?: Date }) =>
        file.LastModified && file.LastModified <= dateBefore,
    );

    this.logger.debug(`Files to remove: ${archiveFiles.length}`);

    let removed = 0;
    for (const file of archiveFiles) {
      try {
        await this.s3Service.deleteFile(file.Key);
        removed++;
      } catch (error) {
        this.logger.debug(`Cannot delete S3 key ${file.Key}: ${error}`);
      }
    }

    this.logger.debug(`clearArchiveTwilioS3Files: DONE (removed=${removed})`);
  }

  private getLastFlowDataByPhoneNumber = (
    flowExecutions: ExecutionInstance[],
    phoneNumber: string,
  ): ExecutionInstance =>
    flowExecutions
      .filter((execution) => execution.contactChannelAddress === phoneNumber)
      .sort(
        (a: ExecutionInstance, b: ExecutionInstance) =>
          a.dateCreated.getTime() - b.dateCreated.getTime(),
      )[0];

  async getCallRecordingDuration(callSid: string): Promise<number | null> {
    try {
      const call = await this.twilio.twilioClient.calls(callSid);
      const recordings = await call.recordings.list();

      if (recordings && recordings.length > 0) {
        return parseInt(recordings[recordings.length - 1]?.duration);
      } else {
        return null;
      }
    } catch (error) {
      this.logger.error(
        `Cannot get story recording duration for callSid: ${callSid} with error: ${error}`,
      );
    }
  }

  async completeCall(callSid: string) {
    return this.twilio.twilioClient.calls(callSid).update({ status: 'completed' });
  }

  async updateCallTwiml(callSid: string, twiml: string) {
    return this.twilio.twilioClient.calls(callSid).update({ twiml });
  }
}
