import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ApplicationConfig } from '../config/default';
import { SuccessRO } from '../common/response/success.ro';
import { TwilioService } from '../call/service/twilio.service';
import { CallService } from '../call/service/call.service';
import { ConfigService } from '@nestjs/config';
import { SchedulerService } from './scheduler.service';
import { TwilioCallStatsInterface } from '../common/interface/twilio-call-stats.interface';
import { SourceType } from './enum/source-type.enum';
import { SchedulerEntity } from './entity/scheduler.entity';

@Controller()
export class SchedulerController {
  private readonly logger: Logger = new Logger(SchedulerController.name);
  private applicationConfig: ApplicationConfig;

  constructor(
    private readonly schedulerService: SchedulerService,
    private readonly twilioService: TwilioService,
    private readonly callService: CallService,
    private readonly configService: ConfigService,
  ) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  @MessagePattern({ cmd: 'getTwilioCallStatistics' })
  async getTwilioCallStatistics(): Promise<TwilioCallStatsInterface> {
    return await this.twilioService.getCallStatistics();
  }

  @MessagePattern({ cmd: 'checkPendingCalls' })
  async checkPendingCalls(): Promise<SuccessRO> {
    const availableSlotsNumber = await this.getAvailableSlotsNumber();
    const nextOutComingCalls =
      await this.schedulerService.getNextOutComingCalls(availableSlotsNumber);

    for (const nextOutComingCall of nextOutComingCalls) {
      this.callTo(nextOutComingCall);
    }

    return { success: true };
  }

  @MessagePattern({ cmd: 'clearIVRRArchiveData' })
  async clearTwilioAndS3ArchiveData(): Promise<SuccessRO> {
    return { success: false };

    try {
      const today = new Date();
      const dateBefore = new Date(
        today.setMonth(
          today.getMonth() - this.applicationConfig.archiveDataMonths,
        ),
      );

      await this.twilioService.clearArchiveTwilioData(dateBefore);

      await Promise.all([
        this.twilioService.clearArchiveTwilioS3Files(dateBefore),
        this.schedulerService.checkInProgressCalls(),
      ]);

      return { success: true };
    } catch (error) {
      this.logger.error(error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'callTo' })
  async callTo(data: SchedulerEntity): Promise<SuccessRO> {
    this.logger.log(`callTo has been called: ${JSON.stringify(data)}`);

    try {
      await this.schedulerService.setStatusAsInProgress(data);

      let status: boolean;

      if (data.type === SourceType.STORY) {
        status = await this.callService.prepareStoryNotification(data);
      } else {
        status = await this.callService.prepareCommentNotification(data);
      }

      return { success: status };
    } catch (error) {
      this.logger.error(`scheduler callTo error`, error);
      return { success: false };
    }
  }

  @MessagePattern({ cmd: 'getAvailableSlotsNumber' })
  async getAvailableSlotsNumber(): Promise<number> {
    this.logger.log(`getAvailableSlotsNumber has been called`);

    const inProgressCallCount =
      (await this.schedulerService.getInProgressCallsCount()) || 0;

    const activeIncomingCallsCount =
      (await this.schedulerService.getActiveIncomingCallsCount()) || 0;

    this.logger.log(`inProgressCallCount = ${inProgressCallCount}`);

    return (
      this.configService.get('application.limitOfPhoneCalls') -
      inProgressCallCount -
      activeIncomingCallsCount
    );
  }
}
