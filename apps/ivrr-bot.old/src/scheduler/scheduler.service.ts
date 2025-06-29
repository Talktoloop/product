import { Injectable, Logger, Inject, forwardRef } from '@nestjs/common';
import { SchedulerStatus } from './enum/status.enum';
import {
  ApplicationConfig,
  TwilioNumberConfig,
  getTwilioNumberConfig,
} from '../config/default';
import { ConfigService } from '@nestjs/config';
import { TwilioService } from '../call/service/twilio.service';
import {
  format,
  addHours,
  addMinutes,
  setHours,
  setMinutes,
  subHours,
} from 'date-fns';
import { getUTCDate } from './helper/get-utc-date';
import { SourceType } from './enum/source-type.enum';
import { SchedulerRepository } from './repository/scheduler.repository';
import { SchedulerEntity } from './entity/scheduler.entity';
import { SchedulerData } from './type/scheduler-data.type';
import { DeleteResult, UpdateResult, In, Not, LessThan } from 'typeorm';

@Injectable()
export class SchedulerService {
  private readonly logger: Logger = new Logger(SchedulerService.name);
  private applicationConfig: ApplicationConfig;

  constructor(
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => TwilioService))
    private readonly twilioService: TwilioService,
    private readonly schedulerRepository: SchedulerRepository,
  ) {
    this.applicationConfig =
      configService.get<ApplicationConfig>('application');
  }

  getSchedulerTime(config: TwilioNumberConfig): Date {
    const schedulerDiff = this.applicationConfig.schedulerDiffInHours;
    let schedulerTime = addMinutes(new Date(), schedulerDiff * 60);

    this.logger.debug(`schedulerTime : ${schedulerTime}`);

    if (!this.checkIfInLocalIsNightNow(config, schedulerTime)) {
      return schedulerTime;
    }

    schedulerTime = setHours(
      schedulerTime,
      this.applicationConfig.endNightHour,
    );

    return setMinutes(schedulerTime, 0);
  }

  async getNextOutComingCalls(limit: number): Promise<SchedulerEntity[]> {
    const outComingCalls = await this.schedulerRepository.find({
      where: {
        status: In([SchedulerStatus.PENDING, SchedulerStatus.FAILED]),
        time: LessThan(new Date()),
        sequenceNumber: LessThan(4),
      },
      order: { time: 'ASC' },
    });

    const nightStart = this.configService.get('application.startNightHour');
    const nightEnd = this.configService.get('application.endNightHour');

    const filteredCalls = outComingCalls.filter(({ time, timezone }) => {
      const localTime =
        timezone > 0 ? addHours(time, timezone) : subHours(time, timezone);
      const value = Number.parseInt(format(localTime, 'H'));

      return value < nightStart && value >= nightEnd;
    });

    if (filteredCalls.length > limit) {
      filteredCalls.slice(0, limit);
    }

    return filteredCalls;
  }

  async checkForDuplicateCalls(
    entity: Partial<SchedulerEntity>,
  ): Promise<Array<SchedulerEntity>> {
    return this.schedulerRepository.find({
      where: {
        sourceId: entity.sourceId,
        type: entity.type,
        status: entity.status,
      },
    });
  }

  async deleteSchedulerEntry(id: number): Promise<DeleteResult> {
    this.logger.debug(`deleteSchedulerEntry, id: ${id}`);

    return this.schedulerRepository.delete({
      id,
      status: Not(In([SchedulerStatus.PENDING, SchedulerStatus.FAILED])),
    });
  }

  async scheduleCall(data: SchedulerData): Promise<SchedulerEntity> {
    this.logger.debug(`scheduleCall: ${JSON.stringify(data)}`);

    const phoneNumberDetails = getTwilioNumberConfig(data?.providerNumber);

    if (!phoneNumberDetails) {
      this.logger.error(
        `Cannot schedule call: incorrect config! Number ${data?.providerNumber} no exist in ENV/SSM.`,
      );

      return;
    }

    const calls = await this.checkForDuplicateCalls(data);

    if (calls.length > 0) {
      return calls.pop();
    }

    return this.schedulerRepository.save({
      ...data,
      status: SchedulerStatus.PENDING,
      time: this.getSchedulerTime(phoneNumberDetails),
    });
  }

  async setCallId(id: string, callId: string): Promise<UpdateResult> {
    this.logger.debug(`set callId for : ${id}`);

    if (!id) {
      return;
    }

    return this.schedulerRepository.update(id, {
      callId,
    });
  }

  async checkInProgressCalls(): Promise<void> {
    const inProgressCalls = await this.findInProgressCallsByDuration(
      this.configService.get('application.callDurationLimitInGHours'),
    );

    const operations = [];

    for (const inProgressCall of inProgressCalls) {
      const call = await this.twilioService
        .getTwilioCallLog(inProgressCall.callId)
        .catch((error) => {
          this.logger.error(`checkInProgressCalls: ${error.message}`);
          return null;
        });

      operations.push(
        call?.status === 'completed' || !call
          ? this.deleteSchedulerEntry(inProgressCall.id)
          : this.setStatusAsFailed(inProgressCall),
      );
    }

    if (operations.length > 0) {
      await Promise.all(operations);
    }
  }

  async setStatusAsInProgress(data: SchedulerEntity): Promise<UpdateResult> {
    this.logger.debug(`set inprogress for : ${JSON.stringify(data)}`);

    return this.schedulerRepository.update(data.id, {
      status: SchedulerStatus.IN_PROGRESS,
      time: new Date(),
    });
  }

  async setStatusAsFailed(data: SchedulerData): Promise<UpdateResult> {
    this.logger.debug(`setStatusAsFailed, data: ${JSON.stringify(data)}`);

    const phoneNumberDetails = getTwilioNumberConfig(data?.providerNumber);

    if (!phoneNumberDetails) {
      this.logger.error(
        `Cannot set status failed: incorrect config! Number ${data?.providerNumber} no exist in ENV/SSM.`,
      );

      return;
    }

    return this.schedulerRepository.update(data.id, {
      status: SchedulerStatus.FAILED,
      sequenceNumber: data.sequenceNumber + 1,
      time: this.getSchedulerTime(phoneNumberDetails),
    });
  }

  async findPendingCallByCommentId(
    commentId: string,
  ): Promise<SchedulerEntity> {
    return this.schedulerRepository.findOne({
      where: {
        status: In([SchedulerStatus.PENDING, SchedulerStatus.IN_PROGRESS]),
        sourceId: commentId,
        type: SourceType.COMMENT,
      },
    });
  }

  async findCallById(id: number): Promise<SchedulerEntity> {
    if (!id) {
      return;
    }

    return this.schedulerRepository.findOne({ where: { id } });
  }

  async findInProgressCallsByDuration(hours: number) {
    return this.schedulerRepository
      .find({
        where: { status: SchedulerStatus.IN_PROGRESS },
      })
      .then((calls) =>
        calls.filter((call) => {
          return addHours(call.time, call.timezone + hours) <= new Date();
        }),
      );
  }

  async getInProgressCallsCount(): Promise<number> {
    return this.schedulerRepository.count({
      where: { status: SchedulerStatus.IN_PROGRESS },
    });
  }

  checkIfInLocalIsNightNow(config: TwilioNumberConfig, date?: Date) {
    const localHour = parseInt(
      format(addHours(date ?? getUTCDate(), config.utcTimeDiff), 'H'),
    );

    this.logger.debug(`localHour : ${localHour}`);

    return (
      localHour >= this.applicationConfig.startNightHour ||
      localHour < this.applicationConfig.endNightHour
    );
  }

  async getActiveIncomingCallsCount(): Promise<number> {
    const statistics = await this.twilioService.getCallStatistics();

    return statistics.inbound.all;
  }
}
