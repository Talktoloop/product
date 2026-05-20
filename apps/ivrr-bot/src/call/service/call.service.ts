import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, forwardRef, Inject } from '@nestjs/common';
import {
  PlayBlockInterface,
  S3Service,
  TWIML_BLOCK_TYPE,
  GET_READINGS_FAILED,
  IvrrCommentDTO,
  IvrrStoryDTO,
  Recordings,
} from '@ourloop/shared';
import { firstValueFrom } from 'rxjs';
import { TwimlService } from './twiml.service';
import { parseBuffer } from 'music-metadata';
import { StorageService } from '../../storage/storage.service';
import { ApiClientService } from '../../api/service/api-client.service';
import { CallInstance } from 'twilio/lib/rest/api/v2010/account/call';
import { TWIML_CONSTANT } from '../constant/twiml.constant';
import { ConfigService } from '@nestjs/config';
import { RpcException } from '@nestjs/microservices';
import { CreateModeratorCallInterface } from '../../common/interface/create-moderator-call';
import { QueueService } from '../../queue/queue.service';
import { QUEUE_CONSTANT } from '../../queue/constant/queue.constant';
import { Queue } from 'bull';
import { SourceType } from '../../scheduler/enum/source-type.enum';
import { SchedulerStatus } from '../../scheduler/enum/status.enum';
import { getTwilioNumberConfig } from '../../config/default';
import { COMMENT_STATUS } from '../constant/comment-status';
import { STORY_STATUS } from '../constant/stataus-status';
import { SchedulerEntity } from '../../scheduler/entity/scheduler.entity';

@Injectable()
export class CallService {
  private readonly logger: Logger = new Logger(CallService.name);

  constructor(
    private readonly twimlService: TwimlService,
    private readonly storageService: StorageService,
    @Inject(forwardRef(() => ApiClientService))
    private readonly apiClientService: ApiClientService,
    private readonly httpService: HttpService,
    private readonly s3Service: S3Service,
    private readonly configService: ConfigService,
    private readonly queueService: QueueService,
    @Inject(QUEUE_CONSTANT.INITIALIZE_CALL)
    private initializeCallQueue: Queue,
  ) {}

  async calculateHeardLevel(callInstance: CallInstance): Promise<number> {
    this.logger.debug(`calculateHeardLevel: ${callInstance.sid}`);

    const excpectedCallDuration =
      await this.storageService.getExpectedCallDuration(callInstance.sid);

    this.logger.debug(`excpectedCallDuration: ${excpectedCallDuration}`);
    this.logger.debug(`callInstance.duration: ${callInstance.duration}`);

    if (!excpectedCallDuration) return;

    const percentageHeardLevel = this.calculatePercentageOfHeardCall(
      callInstance.duration,
      excpectedCallDuration,
    );

    this.logger.debug(
      `Percentage Heard Level for ${callInstance.sid} is ${percentageHeardLevel}%`,
    );

    return percentageHeardLevel;
  }

  async setHeardLevel(
    callInstance: CallInstance,
    percentageHeardLevel: number,
  ): Promise<void> {
    this.logger.debug(
      `Set Percentage Heard Level for ${callInstance.sid} = ${percentageHeardLevel}%`,
    );

    await this.apiClientService.updateTwilioCall({
      twilioCallSid: callInstance.sid,
      percentageLevelOfListeningCall: percentageHeardLevel,
    });
  }

  calculatePercentageOfHeardCall(
    callDuration: string,
    excpectedCallDuration: number,
  ): number {
    return (
      Math.round((+callDuration / excpectedCallDuration) * 100 * 100) / 100
    );
  }

  async calculateExcpectedCallDurationForTwiml(twiml: string) {
    let callDuration = 0;
    const blocks = this.twimlService.twimlToLoopBlocks(twiml);

    for (const block of blocks) {
      switch (block.type) {
        case TWIML_BLOCK_TYPE.PLAY:
          callDuration += await this.calculatePlayBlockDurationInSeconds(
            block as PlayBlockInterface,
          );
          break;

        case TWIML_BLOCK_TYPE.RECORD:
          callDuration +=
            TWIML_CONSTANT.HANDLE_RECORD_BLOCK_DURATION_IN_SECONDS;
          break;
      }
    }

    return Math.round(callDuration * 100) / 100;
  }

  async calculateExcpectedCallDurationForS3Audio(s3FileId: string) {
    const audioUrl = await this.s3Service.getFilePublicUrl(s3FileId);

    return await this.calculatePlayBlockDurationInSeconds({
      type: TWIML_BLOCK_TYPE.PLAY,
      audioUrl,
    });
  }

  private async calculatePlayBlockDurationInSeconds(
    playBlock: PlayBlockInterface,
  ): Promise<number> {
    const audioResponse = await firstValueFrom(
      this.httpService.get(playBlock.audioUrl, {
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'audio/wav',
        },
      }),
    );

    const audioData = audioResponse.data;

    const metadata = await parseBuffer(audioData);

    return metadata.format.duration;
  }

  getRecordingFiles(language: string): Recordings {
    try {
      const recordings = this.configService.get('recordings');

      if (
        !recordings.reply.intro[language] ||
        !recordings.reply.outro[language] ||
        !recordings.reply.options ||
        !recordings.rejection.story.intro[language] ||
        !recordings.rejection.reply.intro[language] ||
        !recordings.publication.story[language] ||
        !recordings.publication.reply[language]
      ) {
        throw new Error('Recordings does not exists');
      }

      return recordings;
    } catch (error) {
      this.logger.error(error);
      throw new RpcException(GET_READINGS_FAILED);
    }
  }

  async addCallInitializationJob(
    shortCodeNumber: string,
    data: CreateModeratorCallInterface,
  ): Promise<boolean> {
    try {
      const fromPhoneNumber = getTwilioNumberConfig(shortCodeNumber);

      this.logger.debug(`initializeCall, shortCodeNumber: ${shortCodeNumber}`);
      this.logger.debug(
        `initializeCall, utcTimeDiff: ${fromPhoneNumber?.utcTimeDiff}`,
      );

      if (!data.schedulerData) {
        data.schedulerData = {
          sourceId: data.commentId ?? data.storyId,
          type: data.commentId ? SourceType.COMMENT : SourceType.STORY,
          status: SchedulerStatus.PENDING,
          lang: data.language,
          providerNumber: shortCodeNumber,
          destinationNumber: data.toPhoneNumber,
          timezone: fromPhoneNumber.utcTimeDiff,
          sequenceNumber: 1,
        };
      }

      await this.queueService.addQueueJob({
        queue: this.initializeCallQueue,
        jobName: QUEUE_CONSTANT.INITIALIZE_CALL,
        data: {
          ...data,
          loopPhoneNumber: shortCodeNumber,
          attempt: 1,
        },
        jobDelayInSeconds: 0,
      });

      return true;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }

  async prepareCommentNotification(
    schedulerData: SchedulerEntity,
  ): Promise<boolean> {
    const comment = await this.apiClientService.getCommentDetails(
      schedulerData.sourceId,
    );

    switch (comment.status) {
      case COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL:
        return this.prepareNewCommentCall({
          comment,
          schedulerData,
        });

      case COMMENT_STATUS.PUBLISHED:
        return this.preparePublishedCommentCall({
          comment,
          schedulerData,
        });

      case COMMENT_STATUS.REJECTED:
        return this.prepareRejectedCommentCall({
          comment,
          schedulerData,
        });
    }
  }

  async prepareStoryNotification(
    schedulerData: SchedulerEntity,
  ): Promise<boolean> {
    const story = await this.apiClientService.getStoryDetails(
      schedulerData.sourceId,
    );

    switch (story.status) {
      case STORY_STATUS.PUBLISHED:
        return this.preparePublishedStoryCall({
          story,
          schedulerData,
        });

      case STORY_STATUS.REJECTED:
        return this.prepareRejectedStoryCall({
          story,
          schedulerData,
        });
    }
  }

  async preparePublishedStoryCall(data: {
    story?: IvrrStoryDTO;
    schedulerData?: SchedulerEntity;
  }): Promise<boolean> {
    const story = data.story;
    const language = story.languageCode;
    
    this.logger.log(
      `[preparePublishedStoryCall] START - StoryID: ${story.id}, Language: ${language}, Phone: ${story.phone}`,
    );

    const recordings = this.getRecordingFiles(language);

    if (!recordings.publication.story[language]) {
      this.logger.error(
        `[preparePublishedStoryCall] MISSING RECORDING - Language: ${language}, StoryID: ${story.id}`,
      );
      return false;
    }

    this.logger.log(
      `[preparePublishedStoryCall] Recording found: ${recordings.publication.story[language]}`,
    );

    const callBlocks = [
      {
        type: TWIML_BLOCK_TYPE.PLAY,
        audioUrl: recordings.publication.story[language],
      },
    ];

    this.logger.log(
      `[preparePublishedStoryCall] Adding call init job - ShortCode: ${story.conversation.shortCodeNumber}`,
    );

    const result = await this.addCallInitializationJob(story.conversation.shortCodeNumber, {
      storyId: story.id,
      resourceStatus: story.status,
      toPhoneNumber: story.phone,
      loopPhoneNumber: story.conversation.shortCodeNumber,
      language,
      callBlocks,
      schedulerData: data.schedulerData,
    });

    this.logger.log(
      `[preparePublishedStoryCall] Call init job result: ${result ? 'SUCCESS' : 'FAILED'} - StoryID: ${story.id}`,
    );

    return result;
  }

  async prepareRejectedStoryCall(data: {
    story?: IvrrStoryDTO;
    schedulerData?: SchedulerEntity;
  }): Promise<boolean> {
    const story = data.story;
    const language = story.languageCode;
    const recordings = this.getRecordingFiles(language);

    if (!recordings.rejection.story.intro[language] || !story.reasonIds) {
      this.logger.error('Rejected story - no recording in the given language');
      return;
    }

    const callBlocks = [
      {
        type: TWIML_BLOCK_TYPE.PLAY,
        audioUrl: recordings.rejection.story.intro[language],
      },
    ];

    story.reasonIds.map((reasonId) => {
      if (recordings.rejection.story.reasons[language][reasonId]) {
        callBlocks.push({
          type: TWIML_BLOCK_TYPE.PLAY,
          audioUrl: recordings.rejection.story.reasons[language][reasonId],
        });
      }
    });

    callBlocks.push({
      type: TWIML_BLOCK_TYPE.PLAY,
      audioUrl: recordings.rejection.story.outro[language],
    });

    return this.addCallInitializationJob(story.conversation.shortCodeNumber, {
      storyId: story.id,
      resourceStatus: story.status,
      toPhoneNumber: story.phone,
      loopPhoneNumber: story.conversation.shortCodeNumber,
      schedulerData: data.schedulerData,
      outroAudioFile: recordings.rejection.outro[language],
      language,
      callBlocks,
      options: [],
    });
  }

  async preparePublishedCommentCall(data: {
    comment?: IvrrCommentDTO;
    schedulerData?: SchedulerEntity;
  }): Promise<boolean> {
    const comment = data.comment;
    const language = comment.languageCode;
    const recordings = this.getRecordingFiles(language);

    this.logger.log(
      `Preparing published comment call - Comment: ${comment.id}, Language: ${language}`,
    );

    if (!recordings.publication.reply[language]) {
      this.logger.error(
        `Published comment - no recording in language: ${language}`,
      );
      return;
    }

    const callBlocks = [
      {
        type: TWIML_BLOCK_TYPE.PLAY,
        audioUrl: recordings.publication.reply[language],
      },
    ];

    return this.addCallInitializationJob(
      comment.story.conversation.shortCodeNumber,
      {
        commentId: comment.id,
        storyId: comment.story.id,
        resourceStatus: comment.status,
        toPhoneNumber: comment.phone,
        loopPhoneNumber: comment.story.conversation.shortCodeNumber,
        schedulerData: data.schedulerData,
        language,
        callBlocks,
      },
    );
  }

  async prepareRejectedCommentCall(data: {
    comment?: IvrrCommentDTO;
    schedulerData?: SchedulerEntity;
  }): Promise<boolean> {
    const comment = data.comment;
    const language = comment.languageCode;
    const recordings = this.getRecordingFiles(language);

    if (!recordings.rejection.reply.intro[language] || !comment.reasonIds) {
      this.logger.error(
        'Rejected comment - no recording in the given language',
      );
      return;
    }

    const callBlocks = [
      {
        type: TWIML_BLOCK_TYPE.PLAY,
        audioUrl: recordings.rejection.reply.intro[language],
      },
    ];

    comment.reasonIds.map((reasonId) => {
      if (recordings.rejection.reply.reasons[language][reasonId]) {
        callBlocks.push({
          type: TWIML_BLOCK_TYPE.PLAY,
          audioUrl: recordings.rejection.reply.reasons[language][reasonId],
        });
      }
    });

    callBlocks.push({
      type: TWIML_BLOCK_TYPE.PLAY,
      audioUrl: recordings.rejection.reply.outro[language],
    });

    return this.addCallInitializationJob(
      comment.story.conversation.shortCodeNumber,
      {
        commentId: comment.id,
        storyId: comment.story.id,
        resourceStatus: comment.status,
        loopPhoneNumber: comment.story.conversation.shortCodeNumber,
        toPhoneNumber: comment.phone,
        schedulerData: data.schedulerData,
        outroAudioFile: recordings.rejection.outro[language],
        language,
        callBlocks,
        options: [],
      },
    );
  }

  async prepareNewCommentCall(data: {
    comment?: IvrrCommentDTO;
    schedulerData?: SchedulerEntity;
  }): Promise<boolean> {
    const comment = data.comment;
    const language = comment.story.languageCode;
    const recordings = this.getRecordingFiles(language);

    const commentAudioFile = await this.s3Service.getFilePublicUrl(
      comment?.s3FileId,
    );

    return this.addCallInitializationJob(
      comment.story.conversation.shortCodeNumber,
      {
        commentId: comment.id,
        storyId: comment.story.id,
        language,
        resourceStatus: comment.status,
        loopPhoneNumber: comment.story.conversation.shortCodeNumber,
        toPhoneNumber: comment.story.phone,
        schedulerData: data.schedulerData,
        options: Object.entries(recordings.reply.options).reduce(
          (data, [key]) => (
            (data[key] = recordings.reply.options[key][language]), data
          ),
          {},
        ),
        outroAudioFile: recordings.reply.outro[language].audio,
        callBlocks: [
          {
            type: TWIML_BLOCK_TYPE.PLAY,
            audioUrl: recordings.reply.intro[language].audio,
          },
          {
            type: TWIML_BLOCK_TYPE.PLAY,
            audioUrl: commentAudioFile,
          },
        ],
      },
    );
  }
}
