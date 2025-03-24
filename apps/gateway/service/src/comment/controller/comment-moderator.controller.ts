import {
  Controller,
  Get,
  Param,
  Body,
  UseGuards,
  Put,
  Query,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CommentService } from '../service/comment.service';
import { CommentModeratorService } from '../service/comment-moderator.service';
import { ValidationPipe, COMMENT_STATUS } from '@ourloop/shared';
import { SuccessRO } from '../../common/response/success.ro';
import { UuidValidationPipe } from '../../common/pipe/uuid-validation.pipe';
import { plainToClass } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { CommentListModeratorPaginationRO } from '../response/comment-list-moderator-pagination.ro';
import { rejectContentSchema } from '../../common/request/schema/reject-content.schema';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { RejectReasonService } from '../../lexicon/service/reject-reason.service';
import { CommentNotificationService } from '../../notification/service/comment-notification.service';
import { PaginationWithExtendedFilterDto } from '../../common/dto/pagination-with-extended-filter.dto';
import { commentListModeratorMapper } from '../mapper/comment-list-moderator.mapper';
import { paginationWithExtendedFilterSchema } from '../../common/request/schema/pagination-with-extended-filter.schema';
import { CommentModeratorRO } from '../response/comment-moderator.ro';
import { commentDetailsMapper } from '../mapper/comment-details.mapper';
import { updateCommentSchema } from '../request/schema/update-comment-schema';
import { UpdateCommentCommentDTO } from '../request/dto/update-comment.dto';
import { checkRejectReason } from '../../common/helpers';
import { MessengerService } from '../../messenger/service/messenger.service';
import { IvrrService } from '../../ivrr/service/ivrr.service';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import {
  COMMENT_INCORRECT_STATUS,
  STORY_INCORRECT_STATUS,
} from '@ourloop/shared';
import { StoryService } from '../../story/service/story.service';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

@ApiBearerAuth()
@ApiTags('Comment Moderator')
@UseGuards(AuthGuard('cognito'), PermissionGuard)
@Controller('comment/moderator')
export class CommentModeratorController {
  constructor(
    private readonly commentService: CommentService,
    private readonly commentModeratorService: CommentModeratorService,
    private readonly rejectReasonService: RejectReasonService,
    private readonly commentNotificationService: CommentNotificationService,
    private readonly messengerService: MessengerService,
    private readonly ivrrService: IvrrService,
    private readonly storyService: StoryService
  ) { }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Update comment' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id')
  async updateComment(
    @Param('id', new UuidValidationPipe())
    commentId: string,
    @Body(new ValidationPipe(updateCommentSchema))
    data: UpdateCommentCommentDTO,
  ): Promise<SuccessRO> {
    const comment = await this.commentService.findComment(commentId, [
      'translations',
      'translations.language',
      'thematics',
    ]);

    const result = await this.commentModeratorService.updateComment(
      comment,
      data,
    );

    return plainToClass(SuccessRO, { success: !!result });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Unpublish comment' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id/unpublish')
  async unPublishComment(
    @Param('id', new UuidValidationPipe())
    commentId: string,
  ): Promise<SuccessRO> {
    const comment = await this.commentService.findComment(commentId);

    const result = await this.commentModeratorService.unPublishComment(comment);
    const success = result && !!result?.affected;

    return plainToClass(SuccessRO, { success });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Set pending recording status' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id/pending-recording')
  async setPendingRecordingStatus(
    @Param('id', new UuidValidationPipe())
    commentId: string,
  ): Promise<SuccessRO> {
    const comment = await this.commentService.findComment(commentId, ['story']);

    if (comment.story.channel !== CHANNEL_CONSTANTS.IVRR) {
      throw new BadRequestException(STORY_INCORRECT_STATUS);
    }

    if (comment.channel !== CHANNEL_CONSTANTS.WEB) {
      throw new BadRequestException(COMMENT_INCORRECT_STATUS);
    }

    const result = await this.commentModeratorService.setCommentStatus(
      comment,
      COMMENT_STATUS.PENDING_RECORDING,
      [
        COMMENT_STATUS.PENDING_RECORDING,
        COMMENT_STATUS.PUBLISHED,
        COMMENT_STATUS.REJECTED,
      ],
    );

    await this.ivrrService.deleteRecordingFile(comment);

    return plainToClass(SuccessRO, { success: !!result?.id });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Publish comment' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id/publish')
  async publishComment(
    @Param('id', new UuidValidationPipe())
    commentId: string,
  ): Promise<SuccessRO> {
    const comment = await this.commentService.findComment(commentId, [
      'recipient',
      'user',
      'language',
      'user.language',
      'user.organisation',
      'translations',
      'translations.language',
      'thematics',
      'story',
      'story.recipient',
      'story.user',
      'story.language',
      'story.country',
      'story.organisations',
      'story.conversation',
      'story.conversation.smsMessages',
      'story.conversation.ivrrMessages',
      'story.conversation.messengerMessages',
    ]);

    const result = await this.commentModeratorService.publishComment(comment);
    const success = result && !!result?.affected;

    if (success) {
      switch (comment.story.channel) {
        case CHANNEL_CONSTANTS.MESSENGER: {
          const conversationAvailability =
            await this.messengerService.checkMessengerAvailability(
              comment.storyId,
              'checkFacebookConversationAvailability',
              CHANNEL_CONSTANTS.MESSENGER,
            );

          if (conversationAvailability) {
            await this.messengerService.sendCommentNotificationToMessenger(
              comment,
              'sendCommentFacebookNotification',
            );
          }
          break;
        }

        case CHANNEL_CONSTANTS.WHATSAPP: {
          const conversationAvailability =
            await this.messengerService.checkMessengerAvailability(
              comment.storyId,
              'checkWhatsappConversationAvailability',
              CHANNEL_CONSTANTS.WHATSAPP,
            );

          if (conversationAvailability) {
            await this.messengerService.sendCommentNotificationToMessenger(
              comment,
              'sendCommentWhatsappNotification',
            );
          }
          break;
        }

        case CHANNEL_CONSTANTS.TELEGRAM: {
          const conversationAvailability =
            await this.messengerService.checkMessengerAvailability(
              comment.storyId,
              'checkTelegramConversationAvailability',
              CHANNEL_CONSTANTS.TELEGRAM,
            );

          if (conversationAvailability) {
            await this.messengerService.sendCommentNotificationToMessenger(
              comment,
              'sendCommentTelegramNotification',
            );
          }
          break;
        }

        case CHANNEL_CONSTANTS.IVRR: {
          await Promise.all([
            this.ivrrService.removeLogsByCommentId(comment.id),
            this.ivrrService.preparePublishedCommentCall(comment),
          ]);
          break;
        }

        default: {
          await this.commentNotificationService.sendNotificationsAfterCommentPublication(
            comment,
          );
        }
      }
      await this.commentNotificationService.sendNotificationsToStoryOwnerAfterCommentPublication(
        comment,
      );
    }

    return plainToClass(SuccessRO, { success });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Reject comment' })
  @PermissionsCerbos(CERBOS_ACTIONS.UPDATE, CERBOS_RESOURCES.COMMENT)
  @Put(':id/reject')
  async rejectComment(
    @Param('id', new UuidValidationPipe())
    commentId: string,
    @Body(new ValidationPipe(rejectContentSchema))
    rejectContent: RejectContentDto,
  ): Promise<SuccessRO> {
    checkRejectReason(rejectContent);

    const { reasonIds } = rejectContent;
    let rejectReasons;
    if (reasonIds?.length > 0) {
      rejectReasons = await this.rejectReasonService.findByIdsOrFail(reasonIds);
    }

    const comment = await this.commentService.findComment(commentId, [
      'story',
      'story.conversation',
      'language',
      'user',
    ]);

    const result = await this.commentModeratorService.rejectComment(
      comment,
      rejectContent,
      rejectReasons,
    );
    const success = !!result?.id;

    if (success) {
      this.commentNotificationService.sendNotificationsAfterRejectingComment(
        comment,
        rejectContent,
      );

      if (comment.channel === CHANNEL_CONSTANTS.IVRR) {
        await this.ivrrService.prepareRejectedCommentCall(
          comment,
          rejectReasons,
        );
      }
    }

    return plainToClass(SuccessRO, { success });
  }

  @Get('pending')
  @ApiOperation({ summary: 'Get list of comments to publish or reject' })
  @ApiResponse({
    status: 200,
    type: CommentListModeratorPaginationRO,
  })
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)

  async getPendingComments(
    @Query(new ValidationPipe(paginationWithExtendedFilterSchema))
    params: PaginationWithExtendedFilterDto,
  ): Promise<CommentListModeratorPaginationRO> {
    if (!params.page || params.page < 1) {
      params.page = 1;
    }

    console.log('getPendingComments:params', params);

    const comments =
      await this.commentModeratorService.getPendingComments(params);

    return plainToClass(CommentListModeratorPaginationRO, {
      meta: comments.meta,
      items: commentListModeratorMapper(comments.items),
    });
  }

  @Get('rejected')
  @ApiOperation({ summary: 'Get list of rejected comments' })
  @ApiResponse({
    status: 200,
    type: CommentListModeratorPaginationRO,
  })
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)

  async getRejectedComments(
    @Query(new ValidationPipe(paginationWithExtendedFilterSchema))
    params: PaginationWithExtendedFilterDto,
  ): Promise<CommentListModeratorPaginationRO> {
    if (!params.page) {
      params.page = 1;
    }
    const comments = await this.commentModeratorService.getCommentsByStatus(
      params,
      COMMENT_STATUS.REJECTED,
    );

    return plainToClass(CommentListModeratorPaginationRO, {
      meta: comments.meta,
      items: commentListModeratorMapper(comments.items),
    });
  }

  @Get('pending-recording')
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)
  @ApiOperation({ summary: 'Get list of pending recording comments' })
  @ApiResponse({
    status: 200,
    type: CommentListModeratorPaginationRO,
  })
  async getPendingRecordingComments(
    @Query(new ValidationPipe(paginationWithExtendedFilterSchema))
    params: PaginationWithExtendedFilterDto,
  ): Promise<CommentListModeratorPaginationRO> {
    if (!params.page) {
      params.page = 1;
    }

    if (params.searchTerm) {
      params.searchTerm = await this.storyService.sanitizeSearchTerm(params.searchTerm.trim());
    }

    const comments = await this.commentModeratorService.getCommentsByStatus(
      params,
      COMMENT_STATUS.PENDING_RECORDING,
      true,
    );

    return plainToClass(CommentListModeratorPaginationRO, {
      meta: comments.meta,
      items: commentListModeratorMapper(comments.items),
    });
  }

  @Get('scheduled')
  @ApiOperation({ summary: 'Get list of scheduled comments' })
  @ApiResponse({
    status: 200,
    type: CommentListModeratorPaginationRO,
  })
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)
  async getScheduledComments(
    @Query(new ValidationPipe(paginationWithExtendedFilterSchema))
    params: PaginationWithExtendedFilterDto,
  ): Promise<CommentListModeratorPaginationRO> {
    if (!params.page) {
      params.page = 1;
    }
    const comments = await this.commentModeratorService.getCommentsByStatus(
      params,
      COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
      true,
    );

    return plainToClass(CommentListModeratorPaginationRO, {
      meta: comments.meta,
      items: commentListModeratorMapper(comments.items),
    });
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Remove comment' })
  @PermissionsCerbos(CERBOS_ACTIONS.DELETE, CERBOS_RESOURCES.COMMENT)
  @Delete(':id')
  async removeComment(
    @Param('id', new UuidValidationPipe())
    commentId: string,
  ): Promise<SuccessRO> {
    const result = await this.commentModeratorService.removeComment(commentId);

    return plainToClass(SuccessRO, { success: !!result });
  }

  @ApiOperation({
    summary: 'Get details of particular comment',
  })
  @ApiResponse({
    status: 200,
    type: CommentModeratorRO,
  })
  @Get(':id')
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)

  async getCommentDetails(
    @Param('id', new UuidValidationPipe()) commentId: string,
  ): Promise<CommentModeratorRO> {
    const comment =
      await this.commentModeratorService.getCommentDetailsByIdOrFail(commentId);

    return commentDetailsMapper(comment, comment.languageId);
  }
}
