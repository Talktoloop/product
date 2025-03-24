import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS, IvrrCommentDTO, IvrrStoryDTO } from '@ourloop/shared';
import { timeout, lastValueFrom } from 'rxjs';
import { ApplicationConfig } from '../../config/default';
import { UserFlowRecord } from '../../common/interface/user-flow-record';
import { TwilioAudio } from '../../common/interface/twilio-audio';
import { getTwilioNumberConfig } from '../../config/default';

@Injectable()
export class ApiClientService {
  private readonly logger: Logger = new Logger(ApiClientService.name);

  constructor(
    @Inject(DI_CONSTANTS.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    private readonly configService: ConfigService,
  ) {}

  async test(): Promise<boolean> {
    console.log('send message testToGateway');
    return lastValueFrom(
      this.clientProxy
        .send({ cmd: 'testToGateway' }, {})
        .pipe(
          timeout(
            this.configService.get<ApplicationConfig>('application')
              .communicationTimeout,
          ),
        ),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        this.logger.error(
          `Could not send story, error: ${JSON.stringify(error)}`,
        );
        return error;
      });
  }

  async testInternal(): Promise<boolean> {
    console.log('send message testInternal');
    return lastValueFrom(
      this.clientProxy
        .send({ cmd: 'testInternal' }, {})
        .pipe(
          timeout(
            this.configService.get<ApplicationConfig>('application')
              .communicationTimeout,
          ),
        ),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        this.logger.error(
          `Could not send story, error: ${JSON.stringify(error)}`,
        );
        return error;
      });
  }

  public async sendTwilioStoryToApi(
    userRecord: UserFlowRecord,
  ): Promise<Record<string, unknown>> {
    if (!userRecord) {
      this.logger.error(`Could not send story, userRecord is not defined`);
      return;
    }

    if (!userRecord.country) {
      const flowConfig = getTwilioNumberConfig(userRecord.shortCodeNumber);

      userRecord.country = flowConfig?.country;
    }

    return this.clientProxy
      .send(
        {
          cmd: 'saveIvrrStory',
        },
        userRecord,
      )
      .pipe(
        timeout(
          this.configService.get<ApplicationConfig>('application')
            .communicationTimeout,
        ),
      )
      .toPromise()
      .catch((error) => {
        this.logger.error(
          `Could not send story, error: ${JSON.stringify(error)}`,
        );
        return error;
      });
  }

  public async sendTwilioCallToApi(
    storyId: string,
    commentId: string,
    phoneNumber: string,
    isCommentReply: boolean,
    call: TwilioAudio,
  ): Promise<Record<string, unknown>> {
    return this.clientProxy
      .send(
        {
          cmd: 'saveIvrrCall',
        },
        { storyId, commentId, isCommentReply, phoneNumber, call },
      )
      .pipe(
        timeout(
          this.configService.get<ApplicationConfig>('application')
            .communicationTimeout,
        ),
      )
      .toPromise()
      .catch((error) => {
        this.logger.error(
          `Could not send record, error: ${JSON.stringify(error)}`,
        );
        return error;
      });
  }

  public async updateTwilioCall(
    call: TwilioAudio,
  ): Promise<Record<string, unknown>> {
    return this.clientProxy
      .send(
        {
          cmd: 'updateTwilioCall',
        },
        { ...call },
      )
      .pipe(
        timeout(
          this.configService.get<ApplicationConfig>('application')
            .communicationTimeout,
        ),
      )
      .toPromise()
      .catch((error) => {
        this.logger.error(
          `Could not update record, error: ${JSON.stringify(error)}`,
        );
        return error;
      });
  }

  public async setCommentAsPublished(
    commentId: string,
  ): Promise<Record<string, unknown>> {
    return this.clientProxy
      .send(
        {
          cmd: 'setCommentAsPublished',
        },
        { commentId },
      )
      .pipe(
        timeout(
          this.configService.get<ApplicationConfig>('application')
            .communicationTimeout,
        ),
      )
      .toPromise()
      .catch((error) => {
        this.logger.error(
          `Could not set comment as published, error: ${JSON.stringify(error)}`,
        );
        return error;
      });
  }

  public async getStoryDetails(storyId: string): Promise<IvrrStoryDTO> {
    return this.clientProxy
      .send(
        {
          cmd: 'getIvrrStoryDetails',
        },
        { storyId },
      )
      .pipe(
        timeout(
          this.configService.get<ApplicationConfig>('application')
            .communicationTimeout,
        ),
      )
      .toPromise()
      .catch((error) => {
        this.logger.error(
          `Could not send message to support, error: ${JSON.stringify(error)}`,
        );
      });
  }

  public async getCommentDetails(commentId: string): Promise<IvrrCommentDTO> {
    return this.clientProxy
      .send(
        {
          cmd: 'getIvrrCommentDetails',
        },
        { commentId },
      )
      .pipe(
        timeout(
          this.configService.get<ApplicationConfig>('application')
            .communicationTimeout,
        ),
      )
      .toPromise()
      .catch((error) => {
        this.logger.error(
          `Could not send message to support, error: ${JSON.stringify(error)}`,
        );
      });
  }
}
