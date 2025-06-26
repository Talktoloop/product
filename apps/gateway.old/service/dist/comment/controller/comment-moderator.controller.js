"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModeratorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comment_service_1 = require("../service/comment.service");
const comment_moderator_service_1 = require("../service/comment-moderator.service");
const shared_1 = require("@ourloop/shared");
const success_ro_1 = require("../../common/response/success.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const class_transformer_1 = require("class-transformer");
const passport_1 = require("@nestjs/passport");
const comment_list_moderator_pagination_ro_1 = require("../response/comment-list-moderator-pagination.ro");
const reject_content_schema_1 = require("../../common/request/schema/reject-content.schema");
const reject_content_dto_1 = require("../../common/dto/reject-content.dto");
const reject_reason_service_1 = require("../../lexicon/service/reject-reason.service");
const comment_notification_service_1 = require("../../notification/service/comment-notification.service");
const pagination_with_extended_filter_dto_1 = require("../../common/dto/pagination-with-extended-filter.dto");
const comment_list_moderator_mapper_1 = require("../mapper/comment-list-moderator.mapper");
const pagination_with_extended_filter_schema_1 = require("../../common/request/schema/pagination-with-extended-filter.schema");
const comment_moderator_ro_1 = require("../response/comment-moderator.ro");
const comment_details_mapper_1 = require("../mapper/comment-details.mapper");
const update_comment_schema_1 = require("../request/schema/update-comment-schema");
const update_comment_dto_1 = require("../request/dto/update-comment.dto");
const helpers_1 = require("../../common/helpers");
const messenger_service_1 = require("../../messenger/service/messenger.service");
const ivrr_service_1 = require("../../ivrr/service/ivrr.service");
const channel_constant_1 = require("../../common/constant/channel.constant");
const shared_2 = require("@ourloop/shared");
const story_service_1 = require("../../story/service/story.service");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let CommentModeratorController = class CommentModeratorController {
    constructor(commentService, commentModeratorService, rejectReasonService, commentNotificationService, messengerService, ivrrService, storyService) {
        this.commentService = commentService;
        this.commentModeratorService = commentModeratorService;
        this.rejectReasonService = rejectReasonService;
        this.commentNotificationService = commentNotificationService;
        this.messengerService = messengerService;
        this.ivrrService = ivrrService;
        this.storyService = storyService;
    }
    async updateComment(commentId, data) {
        const comment = await this.commentService.findComment(commentId, [
            'translations',
            'translations.language',
            'thematics',
        ]);
        const result = await this.commentModeratorService.updateComment(comment, data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
    async unPublishComment(commentId) {
        const comment = await this.commentService.findComment(commentId);
        const result = await this.commentModeratorService.unPublishComment(comment);
        const success = result && !!(result === null || result === void 0 ? void 0 : result.affected);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async setPendingRecordingStatus(commentId) {
        const comment = await this.commentService.findComment(commentId, ['story']);
        if (comment.story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
            throw new common_1.BadRequestException(shared_2.STORY_INCORRECT_STATUS);
        }
        if (comment.channel !== channel_constant_1.CHANNEL_CONSTANTS.WEB) {
            throw new common_1.BadRequestException(shared_2.COMMENT_INCORRECT_STATUS);
        }
        const result = await this.commentModeratorService.setCommentStatus(comment, shared_1.COMMENT_STATUS.PENDING_RECORDING, [
            shared_1.COMMENT_STATUS.PENDING_RECORDING,
            shared_1.COMMENT_STATUS.PUBLISHED,
            shared_1.COMMENT_STATUS.REJECTED,
        ]);
        await this.ivrrService.deleteRecordingFile(comment);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.id) });
    }
    async publishComment(commentId) {
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
        const success = result && !!(result === null || result === void 0 ? void 0 : result.affected);
        if (success) {
            switch (comment.story.channel) {
                case channel_constant_1.CHANNEL_CONSTANTS.MESSENGER: {
                    const conversationAvailability = await this.messengerService.checkMessengerAvailability(comment.storyId, 'checkFacebookConversationAvailability', channel_constant_1.CHANNEL_CONSTANTS.MESSENGER);
                    if (conversationAvailability) {
                        await this.messengerService.sendCommentNotificationToMessenger(comment, 'sendCommentFacebookNotification');
                    }
                    break;
                }
                case channel_constant_1.CHANNEL_CONSTANTS.WHATSAPP: {
                    const conversationAvailability = await this.messengerService.checkMessengerAvailability(comment.storyId, 'checkWhatsappConversationAvailability', channel_constant_1.CHANNEL_CONSTANTS.WHATSAPP);
                    if (conversationAvailability) {
                        await this.messengerService.sendCommentNotificationToMessenger(comment, 'sendCommentWhatsappNotification');
                    }
                    break;
                }
                case channel_constant_1.CHANNEL_CONSTANTS.TELEGRAM: {
                    const conversationAvailability = await this.messengerService.checkMessengerAvailability(comment.storyId, 'checkTelegramConversationAvailability', channel_constant_1.CHANNEL_CONSTANTS.TELEGRAM);
                    if (conversationAvailability) {
                        await this.messengerService.sendCommentNotificationToMessenger(comment, 'sendCommentTelegramNotification');
                    }
                    break;
                }
                case channel_constant_1.CHANNEL_CONSTANTS.IVRR: {
                    await Promise.all([
                        this.ivrrService.removeLogsByCommentId(comment.id),
                        this.ivrrService.preparePublishedCommentCall(comment),
                    ]);
                    break;
                }
                default: {
                    await this.commentNotificationService.sendNotificationsAfterCommentPublication(comment);
                }
            }
            await this.commentNotificationService.sendNotificationsToStoryOwnerAfterCommentPublication(comment);
        }
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async rejectComment(commentId, rejectContent) {
        (0, helpers_1.checkRejectReason)(rejectContent);
        const { reasonIds } = rejectContent;
        let rejectReasons;
        if ((reasonIds === null || reasonIds === void 0 ? void 0 : reasonIds.length) > 0) {
            rejectReasons = await this.rejectReasonService.findByIdsOrFail(reasonIds);
        }
        const comment = await this.commentService.findComment(commentId, [
            'story',
            'story.conversation',
            'language',
            'user',
        ]);
        const result = await this.commentModeratorService.rejectComment(comment, rejectContent, rejectReasons);
        const success = !!(result === null || result === void 0 ? void 0 : result.id);
        if (success) {
            this.commentNotificationService.sendNotificationsAfterRejectingComment(comment, rejectContent);
            if (comment.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
                await this.ivrrService.prepareRejectedCommentCall(comment, rejectReasons);
            }
        }
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async getPendingComments(params) {
        if (!params.page || params.page < 1) {
            params.page = 1;
        }
        console.log('getPendingComments:params', params);
        const comments = await this.commentModeratorService.getPendingComments(params);
        return (0, class_transformer_1.plainToClass)(comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO, {
            meta: comments.meta,
            items: (0, comment_list_moderator_mapper_1.commentListModeratorMapper)(comments.items),
        });
    }
    async getRejectedComments(params) {
        if (!params.page) {
            params.page = 1;
        }
        const comments = await this.commentModeratorService.getCommentsByStatus(params, shared_1.COMMENT_STATUS.REJECTED);
        return (0, class_transformer_1.plainToClass)(comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO, {
            meta: comments.meta,
            items: (0, comment_list_moderator_mapper_1.commentListModeratorMapper)(comments.items),
        });
    }
    async getPendingRecordingComments(params) {
        if (!params.page) {
            params.page = 1;
        }
        if (params.searchTerm) {
            params.searchTerm = await this.storyService.sanitizeSearchTerm(params.searchTerm.trim());
        }
        const comments = await this.commentModeratorService.getCommentsByStatus(params, shared_1.COMMENT_STATUS.PENDING_RECORDING, true);
        return (0, class_transformer_1.plainToClass)(comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO, {
            meta: comments.meta,
            items: (0, comment_list_moderator_mapper_1.commentListModeratorMapper)(comments.items),
        });
    }
    async getScheduledComments(params) {
        if (!params.page) {
            params.page = 1;
        }
        const comments = await this.commentModeratorService.getCommentsByStatus(params, shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL, true);
        return (0, class_transformer_1.plainToClass)(comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO, {
            meta: comments.meta,
            items: (0, comment_list_moderator_mapper_1.commentListModeratorMapper)(comments.items),
        });
    }
    async removeComment(commentId) {
        const result = await this.commentModeratorService.removeComment(commentId);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
    async getCommentDetails(commentId) {
        const comment = await this.commentModeratorService.getCommentDetailsByIdOrFail(commentId);
        return (0, comment_details_mapper_1.commentDetailsMapper)(comment, comment.languageId);
    }
};
exports.CommentModeratorController = CommentModeratorController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Update comment' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(update_comment_schema_1.updateCommentSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_dto_1.UpdateCommentCommentDTO]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "updateComment", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Unpublish comment' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id/unpublish'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "unPublishComment", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Set pending recording status' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id/pending-recording'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "setPendingRecordingStatus", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Publish comment' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id/publish'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "publishComment", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Reject comment' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id/reject'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(reject_content_schema_1.rejectContentSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reject_content_dto_1.RejectContentDto]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "rejectComment", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of comments to publish or reject' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO,
    }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(pagination_with_extended_filter_schema_1.paginationWithExtendedFilterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_with_extended_filter_dto_1.PaginationWithExtendedFilterDto]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "getPendingComments", null);
__decorate([
    (0, common_1.Get)('rejected'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of rejected comments' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO,
    }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(pagination_with_extended_filter_schema_1.paginationWithExtendedFilterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_with_extended_filter_dto_1.PaginationWithExtendedFilterDto]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "getRejectedComments", null);
__decorate([
    (0, common_1.Get)('pending-recording'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of pending recording comments' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO,
    }),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(pagination_with_extended_filter_schema_1.paginationWithExtendedFilterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_with_extended_filter_dto_1.PaginationWithExtendedFilterDto]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "getPendingRecordingComments", null);
__decorate([
    (0, common_1.Get)('scheduled'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of scheduled comments' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: comment_list_moderator_pagination_ro_1.CommentListModeratorPaginationRO,
    }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(pagination_with_extended_filter_schema_1.paginationWithExtendedFilterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_with_extended_filter_dto_1.PaginationWithExtendedFilterDto]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "getScheduledComments", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Remove comment' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.DELETE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "removeComment", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular comment',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: comment_moderator_ro_1.CommentModeratorRO,
    }),
    (0, common_1.Get)(':id'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentModeratorController.prototype, "getCommentDetails", null);
exports.CommentModeratorController = CommentModeratorController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Comment Moderator'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, common_1.Controller)('comment/moderator'),
    __metadata("design:paramtypes", [comment_service_1.CommentService,
        comment_moderator_service_1.CommentModeratorService,
        reject_reason_service_1.RejectReasonService,
        comment_notification_service_1.CommentNotificationService,
        messenger_service_1.MessengerService,
        ivrr_service_1.IvrrService,
        story_service_1.StoryService])
], CommentModeratorController);
//# sourceMappingURL=comment-moderator.controller.js.map