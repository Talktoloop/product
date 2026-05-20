import { Body, Controller, Post, Logger, Param, Inject, Query } from '@nestjs/common';
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
  ) { }

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
    this.logger.log(`  handleLoopInboundCall, callId: ${body.CallSid}`);
    await this.webhookService.handleLoopInboundCall(body);
  }


  private parseStudioBody(body: any): Record<string, any> {
    // Case 1: Studio put a raw x-www-form-urlencoded string under a "body" key
    if (body && typeof body.body === 'string') {
      return Object.fromEntries(new URLSearchParams(body.body));
    }
    // Case 2: Body itself is a raw x-www-form-urlencoded string
    if (typeof body === 'string') {
      return Object.fromEntries(new URLSearchParams(body));
    }
    // Case 3: Normal parsed object (what we expect)
    return body || {};
  }


  @Post('start-call')
  async startCall(@Body() body: any, @Query() query: any) {
    const data = this.parseStudioBody(body);
    const callSid: string | undefined = data?.CallSid ?? query?.CallSid;

    // TEMP debugging to verify what arrived; remove later
    this.logger.log(
      `rawBodyType=${typeof body} ` +
      `parsed=${JSON.stringify(data)} query=${JSON.stringify(query)}`
    );

    if (!callSid) {
      this.logger.warn('[WEBHOOK][START_CALL] Missing CallSid in request');
      return { success: true }; // don’t block the flow
    }

    this.logger.log(`[WEBHOOK][START_CALL] Received for ${callSid}`);

    // fire-and-forget scheduling
    this.webhookService.scheduleCallHangup(callSid)
      .then(() => this.logger.log(`[WEBHOOK][START_CALL] Scheduled hangup for ${callSid}`))
      .catch(err => this.logger.error(
        `[WEBHOOK][START_CALL] Scheduling failed for ${callSid}: ${err.message}`,
        err.stack
      ));

    return { success: true };
  }

  @Post('call-status')
  async handleCallStatusWebhook(
    @Body() body: TwilioCallStatusWebhookRequest,
  ): Promise<void> {
    this.logger.log(
      `Webhook received - CallSid: ${body.CallSid}, Status: ${body.CallStatus}, Direction: ${body.Direction}`,
    );

    const direction = body.Direction.includes('inbound')
      ? CALL_DIRECTION.INBOUND
      : CALL_DIRECTION.OUTBOUND;

    if (body.CallStatus === 'completed') {
      this.logger.log(
        `Call COMPLETED - Processing ${direction} call: ${body.CallSid}`,
      );

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
        this.logger.log(
          `Outbound notification call - queuing for processing: ${body.CallSid}`,
        );
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
