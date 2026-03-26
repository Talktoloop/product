import {
  Controller,
  Logger,
  Inject,
  Body,
  Post,
  UseGuards,
  Get,
} from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { QueueService } from '../../queue/queue.service';
import { QUEUE_CONSTANT } from '../../queue/constant/queue.constant';
import { Queue } from 'bull';
import {
  ValidationPipe,
  GET_READINGS_FAILED,
  Recordings,
  IvrrStoryDTO,
  IvrrCommentDTO,
  BaseAuthGuard,
} from '@ourloop/shared';
import { removeCallLogsSchema } from '../request/schema/remove-call-logs.schema';
import { RemoveCallLogsDto } from '../request/dto/remove-call-logs.dto';
import { SuccessRO } from '../../common/response/success.ro';
import { CallService } from '../../call/service/call.service';
import { TwilioService } from '../../call/service/twilio.service';
import { ConfigService } from '@nestjs/config';
import { importStoriesSchema } from '../request/schema/import-stories.schema';
import { ImportStoriesDto } from '../request/dto/import-stories.dto';
import { StorageService } from '../../storage/storage.service';
import { WebhookService } from '../service/webhook.service';
import TwilioCallData from '../../common/interface/twilio-call-data-webhook-request';
import { RecordingInstance } from 'twilio/lib/rest/api/v2010/account/recording';
import { ApiClientService } from '../service/api-client.service';

@Controller()
export class ModeratorController {
  private readonly logger: Logger = new Logger(ModeratorController.name);

  constructor(
    @Inject(QUEUE_CONSTANT.REMOVE_LOGS)
    private removeLogsQueue: Queue,
    private readonly queueService: QueueService,
    private readonly callService: CallService,
    private readonly twilioService: TwilioService,
    private readonly configService: ConfigService,
    @Inject(QUEUE_CONSTANT.PROCESS_STORY_CALL)
    private processStoryCall: Queue,
    private readonly storageService: StorageService,
    private readonly webhookService: WebhookService,
    private readonly apiClientService: ApiClientService,
  ) {}

  @UseGuards(BaseAuthGuard)
  @Post('import-stories')
  async importStoriesFromTwilio(
    @Body(new ValidationPipe(importStoriesSchema))
    data: ImportStoriesDto,
  ): Promise<SuccessRO> {
    const phoneNumbers = this.configService.get(
      'application.twilioPhoneNumbers',
    );

    if (!Array.isArray(phoneNumbers)) {
      return { success: false };
    }

    const calls = await Promise.all(
      phoneNumbers.map((item) =>
        this.twilioService.getCallsByParams({
          status: 'completed',
          to: item.twilioPhoneNumber,
          startTimeAfter: data.from,
          endTimeBefore: data.to,
        }),
      ),
    );

    let flowData: TwilioCallData;
    let recording: RecordingInstance;
    let s3KeyFile: string;

    for (const callsByPhoneNumber of calls) {
      for (const call of callsByPhoneNumber) {
        flowData = await this.twilioService
          .getFlowDataContext(call.sid)
          .catch(() => {
            return null;
          });

        if (flowData) {
          recording = await this.twilioService.getRecordingUrl(call.sid);
        }

        if (recording) {
          s3KeyFile = await this.webhookService.handleFile(
            call,
            recording.mediaUrl,
          );
        }

        if (s3KeyFile) {
          await this.storageService.createUserFlowRecord({
            phoneNumber: call.from,
            shortCodeNumber: call.to,
            calls: [
              {
                twilioCallSid: call.sid,
                s3FileId: s3KeyFile,
                isStory: true,
                isModeratorCall: false,
                callDate: call.startTime,
              },
            ],
          });

          await this.queueService.addQueueJob({
            queue: this.processStoryCall,
            jobName: QUEUE_CONSTANT.PROCESS_STORY_CALL,
            data: {
              key: call.sid,
              attempt: 3,
              historicalData: true,
            },
            jobDelayInSeconds: 0,
          });
        }

        flowData = null;
        recording = null;
        s3KeyFile = null;
      }
    }

    return { success: true };
  }

  @Get('test')
  async testToGateway(): Promise<SuccessRO> {
    const result = await this.apiClientService.test();

    return { success: result };
  }

  @Get('test-internal')
  async testInternal(): Promise<SuccessRO> {
    const result = await this.apiClientService.testInternal();

    return { success: result };
  }

  @MessagePattern({ cmd: 'testInternal' })
  async testToInternal(): Promise<SuccessRO> {
    console.log('message testInternal');
    try {
      return { success: true };
    } catch (error) {
      this.logger.error(error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'testToIvrr' })
  async testToIvrr(): Promise<SuccessRO> {
    console.log('message testToIvrr');
    try {
      return { success: true };
    } catch (error) {
      this.logger.error(error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'preparePublishedStoryCall' })
  async preparePublishedStoryCall(data: IvrrStoryDTO): Promise<SuccessRO> {
    this.logger.log(
      `[preparePublishedStoryCall] CALLED - StoryID: ${data.id}, Phone: ${data.phone}, Language: ${data.languageCode}`,
    );

    try {
      const result = await this.callService.preparePublishedStoryCall({
        story: data,
      });

      this.logger.log(
        `[preparePublishedStoryCall] RESULT: ${result ? 'SUCCESS' : 'FAILED'} - StoryID: ${data.id}`,
      );

      return { success: result };
    } catch (error) {
      this.logger.error(
        `[preparePublishedStoryCall] ERROR - StoryID: ${data.id}, Error: ${error.message}`,
        error.stack,
      );
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'prepareRejectedStoryCall' })
  async prepareRejectedStoryCall(data: IvrrStoryDTO): Promise<SuccessRO> {
    try {
      const result = await this.callService.prepareRejectedStoryCall({
        story: data,
      });

      return { success: result };
    } catch (error) {
      this.logger.error(error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'preparePublishedCommentCall' })
  async preparePublishedCommentCall(data: IvrrCommentDTO): Promise<SuccessRO> {
    try {
      this.logger.log(
        `Preparing published comment notification call for comment: ${data.id}, language: ${data.languageCode}`,
      );

      const result = await this.callService.preparePublishedCommentCall({
        comment: data,
      });

      this.logger.log(
        `Published comment notification call ${result ? 'scheduled' : 'failed'} for comment: ${data.id}`,
      );

      return { success: result };
    } catch (error) {
      this.logger.error(
        `Error preparing published comment call for comment ${data.id}`,
        error,
      );
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'prepareRejectedCommentCall' })
  async prepareRejectedCommentCall(data: IvrrCommentDTO): Promise<SuccessRO> {
    try {
      const result = await this.callService.prepareRejectedCommentCall({
        comment: data,
      });

      return { success: result };
    } catch (error) {
      this.logger.error(error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'prepareNewCommentCall' })
  async prepareNewCommentCall(data: IvrrCommentDTO): Promise<SuccessRO> {
    try {
      const result = await this.callService.prepareNewCommentCall({
        comment: data,
      });

      return { success: result };
    } catch (error) {
      this.logger.error(error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'getRecordingFiles' })
  getRecordingFiles(data: { language: string }): Recordings {
    try {
      return this.callService.getRecordingFiles(data.language);
    } catch (error) {
      this.logger.error(error);
      throw new RpcException(GET_READINGS_FAILED);
    }
  }

  @MessagePattern({ cmd: 'removeCallLogs' })
  async removeCallLogs(
    @Body(new ValidationPipe(removeCallLogsSchema, { isRpcException: true }))
    data: RemoveCallLogsDto,
  ): Promise<SuccessRO> {
    try {
      await this.queueService.addQueueJob({
        queue: this.removeLogsQueue,
        jobName: QUEUE_CONSTANT.REMOVE_LOGS,
        data: { ...data, attempt: 1 },
        jobDelayInSeconds: 0,
      });

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
}
