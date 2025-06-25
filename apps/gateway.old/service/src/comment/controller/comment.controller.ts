import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Headers,
  UseGuards,
  Put,
  BadRequestException,
  Inject,
  ForbiddenException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { CommentService } from '../service/comment.service';
import { commentListMapper } from '../mapper/comment-list.mapper';
import { ValidationPipe } from '@ourloop/shared';
import { addCommentSchema } from '../request/schema/add-comment-schema';
import { AddCommentDto } from '../request/dto/add-comment.dto';
import { SuccessRO } from '../../common/response/success.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { StoryService } from '../../story/service/story.service';
import { generateHash } from '../../common/helpers';
import { plainToClass } from 'class-transformer';
import { responseToSuccessRO } from '../../common/mapper/success.mapper';
import { AuthGuard } from '@nestjs/passport';
import { CommentStoryListRO } from '../response/comment-story-list.ro';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../../user/entity/user.entity';
import { LanguageId } from '../../language/language-id.decorator';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { MessagePattern } from '@nestjs/microservices';
import { SendCommentDto } from '../request/dto/send-comment.dto';
import { sendCommentSchema } from '../request/schema/send-comment.schema';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { Ip } from '../../user/ip.decorator';
import { COMMENT_LENGTH_IS_INVALID } from '@ourloop/shared';
import { ConfigService } from '@nestjs/config';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly storyService: StoryService,
    @Inject(COMMON_DI.CONFIG)
    private readonly config: ConfigService,
  ) {}

  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Add new Comment' })
  @Post(':storyId')
  async addNewComment(
    @Auth() user: UserEntity,
    @Param('storyId', new UuidValidationPipe())
    storyId: string,
    @Body(new ValidationPipe(addCommentSchema))
    data: AddCommentDto,
    @LanguageId() languageId: number,
  ): Promise<SuccessRO> {
    if (this.config.get('application.onlyGetRequest')) {
      throw new ForbiddenException();
    }

    const story = await this.storyService.findById(storyId, null, false);

    if (story.channel === CHANNEL_CONSTANTS.SMS && data.content.length > 320) {
      throw new BadRequestException(COMMENT_LENGTH_IS_INVALID);
    }

    const comment = await this.commentService.addComment(
      languageId,
      story,
      data,
      user,
    );

    return plainToClass(SuccessRO, { success: !!comment.id });
  }

  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiOperation({ summary: 'Add vote to selected comment' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Put(':id/vote')
  async addCommentVote(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    commentId: string,
    @Ip() ipAddress: string,
    @Headers() reqHeaders: Headers,
  ): Promise<SuccessRO> {
    const hash = generateHash(ipAddress, reqHeaders['user-agent']);
    const response = await this.commentService.addNewVote(
      commentId,
      hash,
      user,
    );
    return responseToSuccessRO(response);
  }

  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiOperation({ summary: 'Remove vote to selected comment' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Put(':id/unvote')
  async unVoteComment(
    @Auth() user: UserEntity,
    @Param('id', new UuidValidationPipe())
    commentId: string,
    @Ip() ipAddress: string,
    @Headers() reqHeaders: Headers,
  ): Promise<SuccessRO> {
    const hash = generateHash(ipAddress, reqHeaders['user-agent']);
    const response = await this.commentService.removeVote(
      commentId,
      hash,
      user,
    );
    return responseToSuccessRO(response);
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get(':storyId')
  @ApiOperation({ summary: 'Get list of comments' })
  @ApiResponse({ status: 200, type: CommentStoryListRO, isArray: true })
  async getListOfComments(
    @Param('storyId') storyId: string,
    @LanguageId() languageId: number,
  ): Promise<CommentStoryListRO[]> {
    const comments = await this.commentService.findAllByStoryId(storyId);

    return commentListMapper(comments, languageId);
  }

  @MessagePattern({ cmd: 'saveReplyAsComment' })
  async saveReplyAsComment(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(sendCommentSchema, { isRpcException: true }))
    data: SendCommentDto,
  ): Promise<void> {
    const comment = await this.commentService.findComment(data.commentId);

    const story = await this.storyService.findById(data.storyId);
    this.commentService.addComment(
      comment.languageId,
      story,
      {
        content: data.comment,
        phone: data.phone,
        parentCommentId: comment.parentCommentId ?? comment.id,
        email: null,
        nickname: null,
      },
      user,
      CHANNEL_CONSTANTS.SMS,
    );
  }
}
