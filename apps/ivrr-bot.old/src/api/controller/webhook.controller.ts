import { Body, Controller, Post, Logger, Param, Inject } from '@nestjs/common';
import TwilioCallStatusWebhookRequest from 'src/common/interface/twilio-call-status-webhook-request';
import TwilioRecordAudioWebhookRequest from '../../common/interface/twilio-record-audio-webhook-request';
import { WebhookService } from '../service/webhook.service';
import { QueueService } from '../../queue/queue.service';
import { QUEUE_CONSTANT } from '../../queue/constant/queue.constant';
import { Queue } from 'bull';
import { CALL_DIRECTION } from '../../call/constant/call-direction';
import { StorageService } from '../../storage/storage.service';

@Controller('webhook')
export class WebhookController {
  private readonly logger: Logger = new Logger(WebhookController.name);

  constructor(
    private readonly webhookService: WebhookService,
    private readonly queueService: QueueService,
    @Inject(QUEUE_CONSTANT.PROCESS_STORY_CALL)
    private processStoryCall: Queue,
    @Inject(QUEUE_CONSTANT.PROCESS_OUTBOUND_CALL)
    private processOutboundCall: Queue,
    private readonly storageService: StorageService,
  ) {}

  @Post('loop-comment-reply/:id')
  async handleLoopCommentCall(
    @Param('id') commentId: string,
    @Body() body: TwilioRecordAudioWebhookRequest,
  ): Promise<void> {
    this.logger.log(
      `handleLoopCommentCall, storyId: ${commentId}, callId: ${body.CallSid}`,
    );

    if (!commentId) {
      this.logger.error('No commentId provided');
      return;
    }

    await this.webhookService.handleLoopReplyCall({
      resourceId: commentId,
      body,
      isCommentReply: true,
    });
  }

  @Post('loop-reply/:id')
  async handleLoopReplyCall(
    @Param('id') storyId: string,
    @Body() body: TwilioRecordAudioWebhookRequest,
  ): Promise<void> {
    this.logger.log(
      `handleLoopReplyCall, storyId: ${storyId}, callId: ${body.CallSid}`,
    );

    if (!storyId) {
      this.logger.error('No storyId provided');
      return;
    }

    await this.webhookService.handleLoopReplyCall({
      resourceId: storyId,
      body,
    });
  }

  @Post('loop-inbound')
  async handleLoopInboundCall(
    @Body() body: TwilioRecordAudioWebhookRequest,
  ): Promise<void> {
    this.logger.log(`handleLoopInboundCall, callId: ${body.CallSid}`);

    await this.webhookService.handleLoopInboundCall(body);
  }

  @Post('call-status')
  async handleCallStatusWebhook(
    @Body() body: TwilioCallStatusWebhookRequest,
  ): Promise<void> {
    const direction = body.Direction.includes('inbound')
      ? CALL_DIRECTION.INBOUND
      : CALL_DIRECTION.OUTBOUND;

    if (body.CallStatus === 'completed') {
      this.logger.log(`handleCallStatusWebhook, callId: ${body.CallSid}`);

      if (direction === CALL_DIRECTION.INBOUND) {
        const userExists = await this.storageService.userExists(body.CallSid);

        const callerCountryCode = body.FromCountry?.toLowerCase();

        if (userExists) {
          await this.queueService.addQueueJob({
            queue: this.processStoryCall,
            jobName: QUEUE_CONSTANT.PROCESS_STORY_CALL,
            data: {
              key: body.CallSid,
              callerCountryCode,
              attempt: 1,
              historicalData: false,
            },
            jobDelayInSeconds: 0,
          });
        } else {
          await this.storageService.saveCallerCountry(
            body.CallSid,
            callerCountryCode,
          );
        }
      } else if (direction === CALL_DIRECTION.OUTBOUND) {
        await this.queueService.addQueueJob({
          queue: this.processOutboundCall,
          jobName: QUEUE_CONSTANT.PROCESS_OUTBOUND_CALL,
          data: { key: body.CallSid, attempt: 1 },
          jobDelayInSeconds: 0,
        });
      }
    }
  }
}
