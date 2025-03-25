import { Body, Controller, Post, Logger, Inject } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';
import { SchedulerService } from '../scheduler/scheduler.service';
import { QueueService } from '../queue/queue.service';
import { QUEUE_CONSTANT } from '../queue/constant/queue.constant';
import { Queue } from 'bull';
import { REPLY_CALL_OPTION } from './constant/reply-call-option';
import { COMMENT_STATUS } from '@ourloop/shared';

@Controller('call')
export class CallController {
  private readonly logger: Logger = new Logger(CallController.name);

  constructor(
    private readonly storageService: StorageService,
    private readonly schedulerService: SchedulerService,
    private readonly queueService: QueueService,
    @Inject(QUEUE_CONSTANT.REMOVE_LOGS)
    private removeLogsQueue: Queue,
  ) {}

  @Post(`finish-menu/${COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL}`)
  async finishMenuForPublishedComment(@Body() body: any): Promise<string> {
    const digit = parseInt(body.Digits);
    const callSid = body.CallSid;

    const finishGatherBlock = await this.storageService.getFinishBlockTwiml(
      callSid,
    );

    if (
      [REPLY_CALL_OPTION.REPLY_LATER, REPLY_CALL_OPTION.UNANSWERED].includes(
        digit,
      )
    ) {
      await this.queueService
        .addQueueJob({
          queue: this.removeLogsQueue,
          jobName: QUEUE_CONSTANT.REMOVE_LOGS,
          data: { callLogSid: callSid, onlyCallLog: true, attempt: 1 },
          jobDelayInSeconds: 0,
        })
        .catch((error) => {
          this.logger.error(
            `Could not send story, error: ${JSON.stringify(error)}`,
          );
          return error;
        });
    }

    switch (digit) {
      case REPLY_CALL_OPTION.REPEAT_MESSAGE: {
        return finishGatherBlock.digitOne;
      }

      case REPLY_CALL_OPTION.REPLY_NOW: {
        return finishGatherBlock.digitTwo;
      }
      case REPLY_CALL_OPTION.REPLY_LATER: {
        await this.schedulerService.scheduleCall(
          finishGatherBlock.schedullerCallData,
        );

        return finishGatherBlock.digitThree;
      }
      case REPLY_CALL_OPTION.UNANSWERED: {
        // say bye and hangup

        return finishGatherBlock.digitFour;
      }
      case REPLY_CALL_OPTION.FINISHED_RECORDING: {
        return finishGatherBlock.digitZero;
      }
    }
  }

  @Post(`finish-menu/${COMMENT_STATUS.REJECTED}`)
  async finishMenuForRejectedResource(@Body() body: any): Promise<string> {
    const digit = parseInt(body.Digits);
    const callSid = body.CallSid;

    const finishGatherBlock = await this.storageService.getFinishBlockTwiml(
      callSid,
    );

    switch (digit) {
      case REPLY_CALL_OPTION.FINISHED_RECORDING: {
        return finishGatherBlock.digitZero;
      }
    }
  }
}
