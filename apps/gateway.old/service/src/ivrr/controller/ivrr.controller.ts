import {
  Body,
  Controller,
  UseGuards,
  Post,
  Get,
  Param,
  Inject,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import {
  DI_CONSTANTS,
  S3Service,
  ValidationPipe,
  ONE_RECORDING_IS_REQUIRED,
  COMMENT_INCORRECT_STATUS,
  COMMENT_UPDATE_ERROR,
  UPLOAD_FILE_FAILED,
  CALL_INITIALIZATION_FAILED,
  COMMENT_STATUS,
  IvrrCommentDTO,
  IvrrStoryDTO,
  BaseAuthGuard,
} from '@ourloop/shared';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBasicAuth,
} from '@nestjs/swagger';
import { SuccessRO } from '../../common/response/success.ro';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { IvrrService } from '../service/ivrr.service';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { saveIvrrStorySchema } from '../schema/save-ivrr-story.schema';
import { SaveIvrrStoryDto } from '../request/dto/save-ivrr-story.dto';
import { saveIvrrCallSchema } from '../schema/save-ivrr-call.schema';
import { SaveIvrrCallDto } from '../request/dto/save-ivrr-call.dto';
import { ConfigService } from '@nestjs/config';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiMultiFile } from '../../common/decorator/api-multi-file.decorator';
import { v4 as uuid } from 'uuid';
import { UploadedFilesRO } from '../response/uploaded-files.ro';
import { uploadFileSchema } from '../schema/upload-files.schema';
import { CommentService } from '../../comment/service/comment.service';
import { CommentModeratorService } from '../../comment/service/comment-moderator.service';
import { CommentEntity } from '../../comment/entity/comment.entity';
import { RecordingsRO } from '../response/recordings.ro';
import { recordingsMapper } from '../mapper/recodings.mapper';
import { plainToClass } from 'class-transformer';
import { setCommentAsPublishedSchema } from '../schema/set-comment-as-published.schema';
import { SetCommentAsPublishedDto } from '../request/dto/set-comment-as-published.dto';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { UpdateIvrrCallFlowDto } from '../request/dto/update-ivrr-call-flow.dto';
import { updateIvrrCallFlowDtoSchema } from '../schema/update-ivrr-call-flow.schema';
import { getStoryDetailsSchema } from '../schema/get-story-details-schema';
import { getCommentDetailsSchema } from '../schema/get-comment-details-schema';
import { StoryModeratorService } from '../../story/service/story-moderator.service';
import { ivrrStoryMapper } from '../mapper/ivrr-story.mapper';
import { ivrrCommentMapper } from '../mapper/ivrr-comment.mapper';
import { transcribeHistoricalStoriesSchema } from '../schema/transcribe-historical-stories.schema';
import { TranscribeHistoricalStoriesDto } from '../request/dto/transcribe-historical-stories.dto';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

@ApiTags('IVRR')
@Controller('ivrr')
export class IvrrController {
  private readonly logger = new Logger(IvrrController.name);

  constructor(
    private readonly ivrrService: IvrrService,
    private readonly commentService: CommentService,
    private readonly storyModeratorService: StoryModeratorService,
    private readonly commentModeratorService: CommentModeratorService,
    private readonly s3Service: S3Service,
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
  ) {
    this.s3Service.setS3Bucket(this.config.get('application.awsS3Bucket'));
  }

  @ApiResponse({ status: 200, type: String })
  @ApiOperation({ summary: 'Test' })
  @Get('test')
  async testToIvrr(): Promise<any> {
    const result = await this.ivrrService.test();
    return { result };
  }

  @ApiResponse({ status: 200, type: String })
  @ApiOperation({ summary: 'Test internal' })
  @Get('test-internal')
  async testInternal(): Promise<any> {
    const result = await this.ivrrService.testInternal();
    return { result };
  }

  @MessagePattern({ cmd: 'testInternal' })
  async testInternalMessage(): Promise<any> {
    console.log('message testInternal');
    return { success: true };
  }

  @MessagePattern({ cmd: 'getIvrrCommentDetails' })
  async getIvrrCommentDetails(
    @Body(new ValidationPipe(getCommentDetailsSchema, { isRpcException: true }))
    data: {
      commentId: string;
    },
  ): Promise<IvrrCommentDTO> {
    const comment = await this.commentModeratorService
      .getCommentDetailsByIdOrFail(data.commentId)
      .catch((error) => {
        throw new RpcException(error);
      });

    return ivrrCommentMapper(comment);
  }

  @MessagePattern({ cmd: 'getIvrrStoryDetails' })
  async getIvrrStoryDetails(
    @Body(new ValidationPipe(getStoryDetailsSchema, { isRpcException: true }))
    data: {
      storyId: string;
    },
  ): Promise<IvrrStoryDTO> {
    const story = await this.storyModeratorService
      .getStoryDetailsByIdAndChannelOrFail(data.storyId, CHANNEL_CONSTANTS.IVRR)
      .catch((error) => {
        throw new RpcException(error);
      });

    return ivrrStoryMapper(story);
  }

  @MessagePattern({ cmd: 'testToGateway' })
  async test(): Promise<SuccessRO> {
    console.log('message testToGateway');
    return plainToClass(SuccessRO, { success: true });
  }

  @MessagePattern({ cmd: 'saveIvrrStory' })
  async saveIvrrStory(
    @Body(new ValidationPipe(saveIvrrStorySchema, { isRpcException: true }))
    data: SaveIvrrStoryDto,
  ): Promise<SuccessRO> {
    const ivrrConversation = await this.ivrrService.saveConversation(data);

    return plainToClass(SuccessRO, { success: !!ivrrConversation.id });
  }

  @MessagePattern({ cmd: 'saveIvrrCall' })
  async saveIvrrModeratorCall(
    @Body(new ValidationPipe(saveIvrrCallSchema, { isRpcException: true }))
    data: SaveIvrrCallDto,
  ): Promise<SuccessRO> {
    const story =
      await this.ivrrService.findStoryWithIvrrConversationByIdOrCommentId(
        data.storyId,
        data.commentId,
      );

    const ivrrCall = await this.ivrrService.saveCall(data, story);

    return plainToClass(SuccessRO, { success: !!ivrrCall.id });
  }

  @MessagePattern({ cmd: 'setCommentAsPublished' })
  async setCommentAsPublished(
    @Body(
      new ValidationPipe(setCommentAsPublishedSchema, { isRpcException: true }),
    )
    data: SetCommentAsPublishedDto,
  ): Promise<SuccessRO> {
    const comment = await this.commentService.findComment(data.commentId);

    const result = await this.commentModeratorService.setCommentStatus(
      comment,
      COMMENT_STATUS.PUBLISHED,
      [COMMENT_STATUS.REJECTED],
    );

    return plainToClass(SuccessRO, { success: !!result?.id });
  }

  @MessagePattern({ cmd: 'updateTwilioCall' })
  async updateTwilioCall(
    @Body(
      new ValidationPipe(updateIvrrCallFlowDtoSchema, { isRpcException: true }),
    )
    data: UpdateIvrrCallFlowDto,
  ): Promise<SuccessRO> {
    const ivrrCall = await this.ivrrService.updateTwilioCall(data);

    return plainToClass(SuccessRO, { success: !!ivrrCall?.id });
  }

  @ApiResponse({ status: 200, type: String })
  @ApiOperation({ summary: 'Get signed url for s3 audio file' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), PermissionGuard)
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.IVRR_FILES)
  @Get('file/:s3FileId')
  async getIVRRFileSignedUrl(
    @Param('s3FileId') s3FileId: string,
  ): Promise<string> {
    return await this.s3Service.getFilePublicUrl(s3FileId);
  }

  @ApiResponse({ status: 200, type: RecordingsRO })
  @ApiOperation({ summary: 'Get intro and outro recordings' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), PermissionGuard)
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.IVRR_FILES)
  @Get('recordings/:language')
  async getRecordings(
    @Param('language') language: string,
  ): Promise<RecordingsRO> {
    // We're making a change to the platform and need to introduce a hack here
    // Originally, every dialect of a language was treated as its own language
    // In this case we were treating Somali Maxatiri and Somali Maay as separate languages
    // we were asked to add two more dialects, Baajuuni and Banadiri-Marka, bjn and bnd respectively
    // This caused a bug where moderators could not open the replies in the outbox because of this endpoint saying the language is not supported
    // The change we're trying to make is so that only the main dialect of the country is used internally and for display, while allowing users to submit feedback in their dialects
    const sanitizedLanguage = ['bjn', 'bnd'].includes(language) ? 'so' : language
    const recordings = await this.ivrrService.getRecordingFiles(sanitizedLanguage);

    return recordingsMapper(recordings, sanitizedLanguage);
  }

  @ApiResponse({ status: 200, type: UploadedFilesRO })
  @ApiOperation({ summary: 'Upload IVRR audio file to s3' })
  @Post('/upload-file')
  @ApiConsumes('multipart/form-data')
  @ApiMultiFile()
  @UseInterceptors(FilesInterceptor('files'))
  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), PermissionGuard)
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.IVRR_FILES)
  async uploadMultipleFiles(
    @Body(new ValidationPipe(uploadFileSchema)) data: { commentId: string },
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<UploadedFilesRO> {
    if (!Array.isArray(files)) {
      throw new BadRequestException(UPLOAD_FILE_FAILED);
    }

    if (data.commentId && files.length !== 1) {
      throw new BadRequestException(ONE_RECORDING_IS_REQUIRED);
    }

    let comment: CommentEntity;

    if (data.commentId) {
      comment = await this.commentService.findComment(data.commentId, [
        'story',
        'story.language',
        'story.conversation',
        'story.recipient',
      ]);

      if (comment.status !== COMMENT_STATUS.PENDING_RECORDING) {
        throw new BadRequestException(COMMENT_INCORRECT_STATUS);
      }
    }

    const uploadedFiles = await Promise.all(
      files.map((file) =>
        this.s3Service.uploadFile(uuid(), file.buffer, 'audio/mpeg'),
      ),
    ).catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(UPLOAD_FILE_FAILED);
    });

    if (comment) {
      await this.ivrrService.deleteRecordingFile(comment);

      await Promise.all([
        this.commentModeratorService.setCommentS3FileId(
          comment,
          uploadedFiles[0]?.keyFile,
        ),
        this.commentModeratorService.setCommentStatus(
          comment,
          COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        ),
      ]).catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(COMMENT_UPDATE_ERROR);
      });

      const result = await this.ivrrService.prepareNewCommentCall(comment);

      if (!result) {
        throw new BadRequestException(CALL_INITIALIZATION_FAILED);
      }
    }

    return {
      s3FileIds: uploadedFiles.map((file) => file.keyFile),
    };
  }

  @ApiResponse({ status: 200, type: String })
  @ApiOperation({ summary: 'Update recordings duration for existing stories' })
  @ApiBasicAuth()
  @UseGuards(BaseAuthGuard)
  @Get('update-recording-duration')
  async updateRecordingDuration(): Promise<void> {
    await this.ivrrService.updateRecordingsDuration();
  }

  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Transcribe historical stories' })
  @ApiResponse({ status: 201 })
  @ApiBasicAuth()
  @Post('transcribe-historical-stories')
  async transcribeHistoricalFeedback(
    @Body(new ValidationPipe(transcribeHistoricalStoriesSchema))
    params: TranscribeHistoricalStoriesDto,
  ) {
    await this.ivrrService.findRecordingsAndTranscribeContentByDurationAndLanguage(
      params,
    );
  }
}
