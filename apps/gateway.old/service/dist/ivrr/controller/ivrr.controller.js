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
var IvrrController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvrrController = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const swagger_1 = require("@nestjs/swagger");
const success_ro_1 = require("../../common/response/success.ro");
const passport_1 = require("@nestjs/passport");
const ivrr_service_1 = require("../service/ivrr.service");
const microservices_1 = require("@nestjs/microservices");
const save_ivrr_story_schema_1 = require("../schema/save-ivrr-story.schema");
const save_ivrr_story_dto_1 = require("../request/dto/save-ivrr-story.dto");
const save_ivrr_call_schema_1 = require("../schema/save-ivrr-call.schema");
const save_ivrr_call_dto_1 = require("../request/dto/save-ivrr-call.dto");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const api_multi_file_decorator_1 = require("../../common/decorator/api-multi-file.decorator");
const uuid_1 = require("uuid");
const uploaded_files_ro_1 = require("../response/uploaded-files.ro");
const upload_files_schema_1 = require("../schema/upload-files.schema");
const comment_service_1 = require("../../comment/service/comment.service");
const comment_moderator_service_1 = require("../../comment/service/comment-moderator.service");
const recordings_ro_1 = require("../response/recordings.ro");
const recodings_mapper_1 = require("../mapper/recodings.mapper");
const class_transformer_1 = require("class-transformer");
const set_comment_as_published_schema_1 = require("../schema/set-comment-as-published.schema");
const set_comment_as_published_dto_1 = require("../request/dto/set-comment-as-published.dto");
const channel_constant_1 = require("../../common/constant/channel.constant");
const update_ivrr_call_flow_dto_1 = require("../request/dto/update-ivrr-call-flow.dto");
const update_ivrr_call_flow_schema_1 = require("../schema/update-ivrr-call-flow.schema");
const get_story_details_schema_1 = require("../schema/get-story-details-schema");
const get_comment_details_schema_1 = require("../schema/get-comment-details-schema");
const story_moderator_service_1 = require("../../story/service/story-moderator.service");
const ivrr_story_mapper_1 = require("../mapper/ivrr-story.mapper");
const ivrr_comment_mapper_1 = require("../mapper/ivrr-comment.mapper");
const transcribe_historical_stories_schema_1 = require("../schema/transcribe-historical-stories.schema");
const transcribe_historical_stories_dto_1 = require("../request/dto/transcribe-historical-stories.dto");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let IvrrController = IvrrController_1 = class IvrrController {
    constructor(ivrrService, commentService, storyModeratorService, commentModeratorService, s3Service, config) {
        this.ivrrService = ivrrService;
        this.commentService = commentService;
        this.storyModeratorService = storyModeratorService;
        this.commentModeratorService = commentModeratorService;
        this.s3Service = s3Service;
        this.config = config;
        this.logger = new common_1.Logger(IvrrController_1.name);
        this.s3Service.setS3Bucket(this.config.get('application.awsS3Bucket'));
    }
    async testToIvrr() {
        const result = await this.ivrrService.test();
        return { result };
    }
    async testInternal() {
        const result = await this.ivrrService.testInternal();
        return { result };
    }
    async testInternalMessage() {
        console.log('message testInternal');
        return { success: true };
    }
    async getIvrrCommentDetails(data) {
        const comment = await this.commentModeratorService
            .getCommentDetailsByIdOrFail(data.commentId)
            .catch((error) => {
            throw new microservices_1.RpcException(error);
        });
        return (0, ivrr_comment_mapper_1.ivrrCommentMapper)(comment);
    }
    async getIvrrStoryDetails(data) {
        const story = await this.storyModeratorService
            .getStoryDetailsByIdAndChannelOrFail(data.storyId, channel_constant_1.CHANNEL_CONSTANTS.IVRR)
            .catch((error) => {
            throw new microservices_1.RpcException(error);
        });
        return (0, ivrr_story_mapper_1.ivrrStoryMapper)(story);
    }
    async test() {
        console.log('message testToGateway');
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: true });
    }
    async saveIvrrStory(data) {
        const ivrrConversation = await this.ivrrService.saveConversation(data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!ivrrConversation.id });
    }
    async saveIvrrModeratorCall(data) {
        const story = await this.ivrrService.findStoryWithIvrrConversationByIdOrCommentId(data.storyId, data.commentId);
        const ivrrCall = await this.ivrrService.saveCall(data, story);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!ivrrCall.id });
    }
    async setCommentAsPublished(data) {
        const comment = await this.commentService.findComment(data.commentId);
        const result = await this.commentModeratorService.setCommentStatus(comment, shared_1.COMMENT_STATUS.PUBLISHED, [shared_1.COMMENT_STATUS.REJECTED]);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.id) });
    }
    async updateTwilioCall(data) {
        const ivrrCall = await this.ivrrService.updateTwilioCall(data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(ivrrCall === null || ivrrCall === void 0 ? void 0 : ivrrCall.id) });
    }
    async getIVRRFileSignedUrl(s3FileId) {
        return await this.s3Service.getFilePublicUrl(s3FileId);
    }
    async getRecordings(language) {
        const sanitizedLanguage = ['bjn', 'bnd'].includes(language) ? 'so' : language;
        const recordings = await this.ivrrService.getRecordingFiles(sanitizedLanguage);
        return (0, recodings_mapper_1.recordingsMapper)(recordings, sanitizedLanguage);
    }
    async uploadMultipleFiles(data, files) {
        var _a;
        if (!Array.isArray(files)) {
            throw new common_1.BadRequestException(shared_1.UPLOAD_FILE_FAILED);
        }
        if (data.commentId && files.length !== 1) {
            throw new common_1.BadRequestException(shared_1.ONE_RECORDING_IS_REQUIRED);
        }
        let comment;
        if (data.commentId) {
            comment = await this.commentService.findComment(data.commentId, [
                'story',
                'story.language',
                'story.conversation',
                'story.recipient',
            ]);
            if (comment.status !== shared_1.COMMENT_STATUS.PENDING_RECORDING) {
                throw new common_1.BadRequestException(shared_1.COMMENT_INCORRECT_STATUS);
            }
        }
        const uploadedFiles = await Promise.all(files.map((file) => this.s3Service.uploadFile((0, uuid_1.v4)(), file.buffer, 'audio/mpeg'))).catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.UPLOAD_FILE_FAILED);
        });
        if (comment) {
            await this.ivrrService.deleteRecordingFile(comment);
            await Promise.all([
                this.commentModeratorService.setCommentS3FileId(comment, (_a = uploadedFiles[0]) === null || _a === void 0 ? void 0 : _a.keyFile),
                this.commentModeratorService.setCommentStatus(comment, shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL),
            ]).catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(shared_1.COMMENT_UPDATE_ERROR);
            });
            const result = await this.ivrrService.prepareNewCommentCall(comment);
            if (!result) {
                throw new common_1.BadRequestException(shared_1.CALL_INITIALIZATION_FAILED);
            }
        }
        return {
            s3FileIds: uploadedFiles.map((file) => file.keyFile),
        };
    }
    async updateRecordingDuration() {
        await this.ivrrService.updateRecordingsDuration();
    }
    async transcribeHistoricalFeedback(params) {
        await this.ivrrService.findRecordingsAndTranscribeContentByDurationAndLanguage(params);
    }
};
exports.IvrrController = IvrrController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: String }),
    (0, swagger_1.ApiOperation)({ summary: 'Test' }),
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "testToIvrr", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: String }),
    (0, swagger_1.ApiOperation)({ summary: 'Test internal' }),
    (0, common_1.Get)('test-internal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "testInternal", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'testInternal' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "testInternalMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getIvrrCommentDetails' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(get_comment_details_schema_1.getCommentDetailsSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "getIvrrCommentDetails", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getIvrrStoryDetails' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(get_story_details_schema_1.getStoryDetailsSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "getIvrrStoryDetails", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'testToGateway' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "test", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveIvrrStory' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(save_ivrr_story_schema_1.saveIvrrStorySchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_ivrr_story_dto_1.SaveIvrrStoryDto]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "saveIvrrStory", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveIvrrCall' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(save_ivrr_call_schema_1.saveIvrrCallSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_ivrr_call_dto_1.SaveIvrrCallDto]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "saveIvrrModeratorCall", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'setCommentAsPublished' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(set_comment_as_published_schema_1.setCommentAsPublishedSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_comment_as_published_dto_1.SetCommentAsPublishedDto]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "setCommentAsPublished", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'updateTwilioCall' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(update_ivrr_call_flow_schema_1.updateIvrrCallFlowDtoSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ivrr_call_flow_dto_1.UpdateIvrrCallFlowDto]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "updateTwilioCall", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: String }),
    (0, swagger_1.ApiOperation)({ summary: 'Get signed url for s3 audio file' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.IVRR_FILES),
    (0, common_1.Get)('file/:s3FileId'),
    __param(0, (0, common_1.Param)('s3FileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "getIVRRFileSignedUrl", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: recordings_ro_1.RecordingsRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Get intro and outro recordings' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.IVRR_FILES),
    (0, common_1.Get)('recordings/:language'),
    __param(0, (0, common_1.Param)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "getRecordings", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: uploaded_files_ro_1.UploadedFilesRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Upload IVRR audio file to s3' }),
    (0, common_1.Post)('/upload-file'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, api_multi_file_decorator_1.ApiMultiFile)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.IVRR_FILES),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(upload_files_schema_1.uploadFileSchema))),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "uploadMultipleFiles", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: String }),
    (0, swagger_1.ApiOperation)({ summary: 'Update recordings duration for existing stories' }),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, common_1.Get)('update-recording-duration'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "updateRecordingDuration", null);
__decorate([
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Transcribe historical stories' }),
    (0, swagger_1.ApiResponse)({ status: 201 }),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Post)('transcribe-historical-stories'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(transcribe_historical_stories_schema_1.transcribeHistoricalStoriesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transcribe_historical_stories_dto_1.TranscribeHistoricalStoriesDto]),
    __metadata("design:returntype", Promise)
], IvrrController.prototype, "transcribeHistoricalFeedback", null);
exports.IvrrController = IvrrController = IvrrController_1 = __decorate([
    (0, swagger_1.ApiTags)('IVRR'),
    (0, common_1.Controller)('ivrr'),
    __param(5, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [ivrr_service_1.IvrrService,
        comment_service_1.CommentService,
        story_moderator_service_1.StoryModeratorService,
        comment_moderator_service_1.CommentModeratorService,
        shared_1.S3Service,
        config_1.ConfigService])
], IvrrController);
//# sourceMappingURL=ivrr.controller.js.map