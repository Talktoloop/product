import { Inject, Injectable, Logger, forwardRef } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  S3Service,
  CustomError,
  DI_CONSTANTS as SHARED_DI,
  LANGUAGE_NOT_FOUND,
  NO_STORY,
  STORY_ALREADY_EXITS,
  NO_CALL,
  STORY_STATUS,
  Recordings,
  setDelay,
  doSpeechToTextByAzure,
} from '@ourloop/shared';
import { AddStoryDto } from '../../story/request/dto/add-story.dto';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { ConfigService } from '@nestjs/config';
import { timeout } from 'rxjs/operators';
import { StoryConversationEntity } from '../../story/entity/story-conversation.entity';
import { LanguageRepository } from '../../language/language.repository';
import { LanguageEntity } from '../../language/entity/language.entity';
import { StoryConversationService } from '../../story/service/story-conversation.service';
import { StoryService } from '../../story/service/story.service';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { IvrrCallRepository } from '../repository/ivrr-call.repository';
import { IvrrCallEntity } from '../entity/ivrr-call.entity';
import { SaveIvrrCallDto } from '../request/dto/save-ivrr-call.dto';
import { StoryRepository } from '../../story/repository/story.repository';
import { RpcException } from '@nestjs/microservices';
import {
  LambdaClient,
  InvokeCommand,
  InvokeAsyncCommandOutput,
} from '@aws-sdk/client-lambda';
import { lastValueFrom } from 'rxjs';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { RejectReasonEntity } from '../../lexicon/entity/reject-reason.entity';
import { UpdateIvrrCallFlowDto } from '../request/dto/update-ivrr-call-flow.dto';
import { CommentService } from '../../comment/service/comment.service';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { SaveIvrrStoryDto } from '../request/dto/save-ivrr-story.dto';
import { ivrrStoryMapper } from '../mapper/ivrr-story.mapper';
import { ivrrCommentMapper } from '../mapper/ivrr-comment.mapper';
import { DeleteObjectCommandOutput } from '@aws-sdk/client-s3';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { parseBuffer } from 'music-metadata';
import { subMonths } from 'date-fns';
import { Not, IsNull, Between } from 'typeorm';
import { staticConfig } from '../../config/default';
import { TranscribeHistoricalStoriesDto } from '../request/dto/transcribe-historical-stories.dto';

import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { StoryTranslationModeratorService } from '../../story/service/story-translation-moderator.service';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { LanguageService } from '../../language/language.service';

@Injectable()
export class IvrrService {
  private readonly logger = new Logger(IvrrService.name);
  constructor(
    @Inject(SHARED_DI.CLIENT_PROXY)
    private readonly clientProxy: ClientProxy,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
    private readonly languageEntityRepository: LanguageRepository,
    private readonly storyConversationService: StoryConversationService,
    private readonly storyRepository: StoryRepository,
    private readonly ivrrCallRepository: IvrrCallRepository,
    private readonly commentService: CommentService,
    @Inject(forwardRef(() => StoryService))
    private readonly storyService: StoryService,
    @Inject(COMMON_DI.LAMBDA)
    private readonly lambdaProvider: LambdaClient,
    private readonly s3Service: S3Service,
    private readonly httpService: HttpService,
    private readonly storyTranslationModeratorService: StoryTranslationModeratorService,
    private readonly languageService: LanguageService,
  ) {}

  async findStoryWithIvrrConversationByIdOrCommentId(
    storyId: string,
    commentId: string,
  ): Promise<StoryEntity> {
    if (commentId) {
      const comment = await this.commentService.findComment(commentId, [
        'story',
        'story.conversation',
        'story.conversation.language',
      ]);

      return comment.story;
    }

    return this.storyRepository
      .findOneOrFail({
        where: {
          id: storyId,
        },
        relations: ['conversation', 'conversation.language'],
      })
      .catch((error) => {
        throw new CustomError(NO_STORY, {
          error: error?.message,
        });
      });
  }

  async removeStoryLogs(story: StoryEntity): Promise<boolean> {
    if (!story?.conversationId) {
      return;
    }

    const call = await this.ivrrCallRepository.findOne({
      where: { isStory: true, conversationId: story.conversationId },
    });

    if (!call) {
      return;
    }

    return this.removeLogs(call.twilioCallSid, true);
  }

  async removeLogsByCommentId(commentId: string): Promise<boolean> {
    if (!commentId) {
      return;
    }

    const call = await this.ivrrCallRepository.findOne({
      where: { commentId },
    });

    if (!call) {
      return;
    }

    return this.removeLogs(call.twilioCallSid, false);
  }

  async removeLogs(callLogSid: string, onlyCallLog: boolean): Promise<boolean> {
    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'removeCallLogs' },
          {
            callLogSid,
            onlyCallLog,
          },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((result) => result.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async updateTwilioCall(dto: UpdateIvrrCallFlowDto): Promise<IvrrCallEntity> {
    const call = await this.ivrrCallRepository
      .findOneOrFail({
        where: {
          twilioCallSid: dto.twilioCallSid,
        },
      })
      .catch((error) => {
        throw new CustomError(NO_CALL, {
          error: error?.message,
        });
      });

    return await this.ivrrCallRepository.save({
      ...call,
      ...dto,
    });
  }

  async saveCall(
    data: SaveIvrrCallDto,
    story: StoryEntity,
  ): Promise<IvrrCallEntity> {
    let comment: CommentEntity;

    if (data.isCommentReply) {
      const parent = await this.commentService.findComment(data.commentId);

      comment = await this.commentService.addComment(
        story.languageId,
        story,
        {
          content: '',
          parentCommentId: parent.parentCommentId ?? parent.id,
          phone: data.phoneNumber,
          s3FileId: data.call?.s3FileId,
        },
        story.user,
        CHANNEL_CONSTANTS.IVRR,
      );
    }

    const ivrrCall = await this.ivrrCallRepository
      .save({
        ivrrConversation: story.conversation,
        isModeratorCall: data.call.isModeratorCall,
        isStory: data.call.isStory,
        s3FileId: data.call.s3FileId,
        callDate: data.call.callDate,
        twilioCallSid: data.call.twilioCallSid,
        twilioFlowXml: data.call.twilioFlowXml,
        commentId: comment?.id,
        recordingDuration: data.call?.recordingDuration,
      })
      .catch((error) => {
        throw new CustomError(NO_STORY, {
          error: error?.message,
        });
      });
    const recordingWithMinDuration =
      (data.call?.recordingDuration ?? 0) >=
      staticConfig.minimumRecordingDuration;
    const shouldRunTranscription =
      story.conversation?.language?.transcribeLang && data.isCommentReply;

    if (shouldRunTranscription && recordingWithMinDuration) {
      await this.runTranscriptionLambdaAsync(
        SOURCE_TYPE.COMMENT,
        ivrrCall.id,
        story.conversation?.language?.transcribeLang,
      );
    }

    return ivrrCall;
  }

  async saveConversation(
    dto: SaveIvrrStoryDto,
  ): Promise<StoryConversationEntity> {
    const languageEntity = await this.fetchFlowLanguage(dto.language);

    if (!languageEntity) {
      throw new RpcException(LANGUAGE_NOT_FOUND);
    }

    let ivrrConversationEntity = await this.storyConversationService.findByUUID(
      dto.storyUuid,
      ['language'],
    );

    if (ivrrConversationEntity) {
      throw new RpcException(STORY_ALREADY_EXITS);
    }

    const recordingWithMinDuration = dto.calls.find(
      (call) => call.recordingDuration >= staticConfig.minimumRecordingDuration,
    );
    const story = await this.storyService.addStory(languageEntity.id, {
      content: '',
      userWantContact: !dto.hideUserPhoneNumber,
      phone: dto.phoneNumber,
      country: dto.country,
      channel: CHANNEL_CONSTANTS.IVRR,
      isSensitive: dto.isSensitiveStory,
      status:
        recordingWithMinDuration || dto.isSensitiveStory
          ? STORY_STATUS.PENDING_TRANSCRIPTION
          : STORY_STATUS.CONDITIONALLY_REJECTED,
    } as AddStoryDto);

    ivrrConversationEntity =
      await this.storyConversationService.saveConversation({
        uuid: dto.storyUuid,
        serviceNumber: dto.shortCodeNumber,
        startedAt: dto.flowStartedAt,
        languageId: languageEntity.id,
        storyId: story.id,
      });

    await this.storyRepository.update(
      {
        id: story.id,
      },
      { conversationId: ivrrConversationEntity.id },
    );

    for (const call of dto.calls) {
      const ivrrCall = await this.ivrrCallRepository.save(
        IvrrCallEntity.createFrom({
          conversation: ivrrConversationEntity,
          isModeratorCall: call.isModeratorCall,
          isStory: call.isStory,
          s3FileId: call.s3FileId,
          callDate: call.callDate,
          twilioCallSid: call.twilioCallSid,
          recordingDuration: call?.recordingDuration,
        }),
      );

      const transcribeLang =
        ivrrConversationEntity.language?.transcribeLang ??
        languageEntity.transcribeLang;

      if (
        ivrrCall.isStory &&
        transcribeLang &&
        (recordingWithMinDuration || dto.isSensitiveStory)
      ) {
        await this.runTranscriptionLambdaAsync(
          SOURCE_TYPE.STORY,
          ivrrCall.id,
          transcribeLang,
        );
      }
    }

    return ivrrConversationEntity;
  }

  async getRecordingFiles(language: string): Promise<Recordings> {
    return lastValueFrom(
      this.clientProxy
        .send({ cmd: 'getRecordingFiles' }, { language })
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    ).catch((error) => {
      throw new CustomError(error.message, error.error);
    });
  }

  async preparePublishedStoryCall(story: StoryEntity): Promise<boolean> {
    if (!story.recipient?.userWantContact) return false;
    if (
      this.config.get('application.disableNotifications') ||
      this.config.get('application.disableIvrPublicationNotifications') ||
      (story.edited &&
        this.config.get('application.disableNotificationsAfterEdit'))
    )
      return false;

    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'preparePublishedStoryCall' },
          { ...ivrrStoryMapper(story) },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async preparePublishedCommentCall(comment: CommentEntity): Promise<boolean> {
    if (!comment.story?.recipient?.userWantContact) return false;
    if (
      this.config.get('application.disableNotifications') ||
      this.config.get('application.disableIvrPublicationNotifications')
    )
      return false;

    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'preparePublishedCommentCall' },
          { ...ivrrCommentMapper(comment) },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async prepareRejectedCommentCall(
    comment: CommentEntity,
    reasons: RejectReasonEntity[],
  ): Promise<boolean> {
    if (!comment.story?.recipient?.userWantContact === false) return false;
    if (
      this.config.get('application.disableNotifications') ||
      this.config.get('application.disableIvrRejectNotifications')
    )
      return false;

    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'prepareRejectedCommentCall' },
          { ...ivrrCommentMapper(comment, reasons) },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async prepareRejectedStoryCall(
    story: StoryEntity,
    reasons: RejectReasonEntity[],
  ): Promise<boolean> {
    if (!story.recipient?.userWantContact) return false;
    if (
      this.config.get('application.disableNotifications') ||
      this.config.get('application.disableIvrRejectNotifications')
    )
      return false;

    await this.removeStoryLogs(story);

    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'prepareRejectedStoryCall' },
          { ...ivrrStoryMapper(story, reasons) },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async test(): Promise<boolean> {
    console.log('send message testToIvrr');
    return lastValueFrom(
      this.clientProxy
        .send({ cmd: 'testToIvrr' }, {})
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async testInternal(): Promise<boolean> {
    console.log('send message testInternal');
    return lastValueFrom(
      this.clientProxy
        .send({ cmd: 'testInternal' }, {})
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  async prepareNewCommentCall(comment: CommentEntity): Promise<boolean> {
    if (!comment.story?.recipient?.userWantContact) return false;

    return lastValueFrom(
      this.clientProxy
        .send(
          { cmd: 'prepareNewCommentCall' },
          { ...ivrrCommentMapper(comment) },
        )
        .pipe(timeout(this.config.get('application.communicationTimeout'))),
    )
      .then((data) => !!data.success)
      .catch((error) => {
        throw new CustomError(error.message, error.error);
      });
  }

  private async fetchFlowLanguage(lang: string): Promise<LanguageEntity> {
    if (!lang) {
      return;
    }

    return await this.languageEntityRepository.findOne({
      where: {
        code: lang,
      },
    });
  }

  async deleteRecordingFile(
    comment: CommentEntity,
  ): Promise<DeleteObjectCommandOutput> {
    if (comment.s3FileId) {
      return this.s3Service.deleteFile(comment.s3FileId);
    }
  }

  async runTranscriptionLambdaAsync(
    sourceType: SOURCE_TYPE,
    callId: number,
    language: string,
  ): Promise<InvokeAsyncCommandOutput | void> {
    const payload = {
      callId,
      language,
      sourceType,
    };

    const params = {
      FunctionName: this.config.get('transcribe.aws.lambdaARN'),
      Payload: JSON.stringify(payload),
    };

    console.log('💀'.repeat(10));
    console.log(`runTranscriptionLambdaAsync`, params);

    this.logger.log(`run transcribe for ${callId} and  ${language}`);

    return new Promise((resolve, reject) => {
      const command = new InvokeCommand(params);

      this.lambdaProvider.send(command, (error, data) => {
        if (error) {
          this.logger.error(
            `runTranscriptionLambdaSync invoke error ${JSON.stringify(error)}`,
          );
          reject(error);
        }
        this.logger.log(
          `runTranscriptionLambdaSync invoke resolve ${JSON.stringify(data)}`,
        );
        resolve(data);
      });
    });
  }

  async getS3FileAudioDuration(s3FileId: string) {
    try {
      const audioUrl = await this.s3Service.getFilePublicUrl(s3FileId);

      const audioResponse = await firstValueFrom(
        this.httpService.get(audioUrl, {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'audio/wav',
          },
        }),
      );

      const audioData = audioResponse.data;
      const metadata = await parseBuffer(audioData);

      return metadata.format.duration;
    } catch (error) {
      this.logger.error(
        `S3 audio file duration error: ${JSON.stringify(error)}`,
      );
    }
  }

  async updateRecordingsDuration(): Promise<void> {
    const twoMonthsAgo = subMonths(new Date(), 2);
    const now = new Date();

    const allCalls = await this.ivrrCallRepository.find({
      where: {
        s3FileId: Not(IsNull()),
        recordingDuration: IsNull(),
        callDate: Between(twoMonthsAgo, now),
      },
    });

    for (const call of allCalls) {
      const recordingDuration = await this.getS3FileAudioDuration(
        call.s3FileId,
      );
      console.log('ID-', call.s3FileId, 'REC-', recordingDuration);
      if (recordingDuration) {
        await this.ivrrCallRepository.update(call.id, {
          recordingDuration: Math.ceil(recordingDuration),
        });
      }
      await setDelay(1000);
    }
  }

  async findRecordingsAndTranscribeContentByDurationAndLanguage(
    params: TranscribeHistoricalStoriesDto,
  ): Promise<void> {
    const calls =
      await this.ivrrCallRepository.findStoryCallsByLanguageCodeAndDuration(
        params,
      );

    let counter = 0;
    const languages = await this.languageEntityRepository.find();
    const language = languages.find(
      (entity) => entity.code === params.language,
    );
    let translation: StoryTranslationEntity;
    let story: StoryEntity;

    for (const call of calls) {
      this.logger.log(`call: ${JSON.stringify(call)}`);
      counter++;

      const audioUrl = await this.s3Service.getFilePublicUrl(call.s3FileId);
      const content = await doSpeechToTextByAzure(
        this.config.get('azure.subscriptionToken'),
        audioUrl,
        parseInt(staticConfig.minimumRecordingDuration),
        language.transcribeLang,
      );

      if (content) {
        await this.ivrrCallRepository.update(
          { id: call.id },
          {
            content,
            transcriptionStatus: TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
          },
        );

        story = await this.storyTranslationModeratorService.getTranslations(
          call.storyId,
        );

        translation = story.translations.find(
          (entity) => entity.languageId === story.languageId,
        );

        if (translation) {
          translation.content = content;
        } else {
          translation = new StoryTranslationEntity({
            storyId: story.id,
            languageId: story.languageId,
            status: TRANSLATION_STATUS_CONSTANTS.TRANSLATED,
            type: language.provider
              ? TRANSLATION_TYPE_CONSTANTS.MACHINE
              : TRANSLATION_TYPE_CONSTANTS.MANUAL,
            content,
          });
        }

        await this.storyTranslationModeratorService.saveTranslationToRepository(
          translation,
        );

        this.languageService.invokeTranslation(story.id, content, language.id);
      } else {
        await this.ivrrCallRepository.update(
          { id: call.id },
          {
            transcriptionStatus: TRANSLATION_STATUS_CONSTANTS.ERROR,
          },
        );
      }

      await setDelay(3000);

      this.logger.log(
        `number of calls to transcribe: ${calls.length - counter}`,
      );
    }
  }
}
