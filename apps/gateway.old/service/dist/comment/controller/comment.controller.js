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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comment_service_1 = require("../service/comment.service");
const comment_list_mapper_1 = require("../mapper/comment-list.mapper");
const shared_1 = require("@ourloop/shared");
const add_comment_schema_1 = require("../request/schema/add-comment-schema");
const add_comment_dto_1 = require("../request/dto/add-comment.dto");
const success_ro_1 = require("../../common/response/success.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const story_service_1 = require("../../story/service/story.service");
const helpers_1 = require("../../common/helpers");
const class_transformer_1 = require("class-transformer");
const success_mapper_1 = require("../../common/mapper/success.mapper");
const passport_1 = require("@nestjs/passport");
const comment_story_list_ro_1 = require("../response/comment-story-list.ro");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../../user/entity/user.entity");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const languages_constants_1 = require("../../common/constant/languages.constants");
const microservices_1 = require("@nestjs/microservices");
const send_comment_dto_1 = require("../request/dto/send-comment.dto");
const send_comment_schema_1 = require("../request/schema/send-comment.schema");
const channel_constant_1 = require("../../common/constant/channel.constant");
const ip_decorator_1 = require("../../user/ip.decorator");
const shared_2 = require("@ourloop/shared");
const config_1 = require("@nestjs/config");
const di_constant_1 = require("../../common/constant/di.constant");
let CommentController = class CommentController {
    constructor(commentService, storyService, config) {
        this.commentService = commentService;
        this.storyService = storyService;
        this.config = config;
    }
    async addNewComment(user, storyId, data, languageId) {
        if (this.config.get('application.onlyGetRequest')) {
            throw new common_1.ForbiddenException();
        }
        const story = await this.storyService.findById(storyId, null, false);
        if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.SMS && data.content.length > 320) {
            throw new common_1.BadRequestException(shared_2.COMMENT_LENGTH_IS_INVALID);
        }
        const comment = await this.commentService.addComment(languageId, story, data, user);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!comment.id });
    }
    async addCommentVote(user, commentId, ipAddress, reqHeaders) {
        const hash = (0, helpers_1.generateHash)(ipAddress, reqHeaders['user-agent']);
        const response = await this.commentService.addNewVote(commentId, hash, user);
        return (0, success_mapper_1.responseToSuccessRO)(response);
    }
    async unVoteComment(user, commentId, ipAddress, reqHeaders) {
        const hash = (0, helpers_1.generateHash)(ipAddress, reqHeaders['user-agent']);
        const response = await this.commentService.removeVote(commentId, hash, user);
        return (0, success_mapper_1.responseToSuccessRO)(response);
    }
    async getListOfComments(storyId, languageId) {
        const comments = await this.commentService.findAllByStoryId(storyId);
        return (0, comment_list_mapper_1.commentListMapper)(comments, languageId);
    }
    async saveReplyAsComment(user, data) {
        var _a;
        const comment = await this.commentService.findComment(data.commentId);
        const story = await this.storyService.findById(data.storyId);
        this.commentService.addComment(comment.languageId, story, {
            content: data.comment,
            phone: data.phone,
            parentCommentId: (_a = comment.parentCommentId) !== null && _a !== void 0 ? _a : comment.id,
            email: null,
            nickname: null,
        }, user, channel_constant_1.CHANNEL_CONSTANTS.SMS);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Add new Comment' }),
    (0, common_1.Post)(':storyId'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('storyId', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, common_1.Body)(new shared_1.ValidationPipe(add_comment_schema_1.addCommentSchema))),
    __param(3, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, add_comment_dto_1.AddCommentDto, Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "addNewComment", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiOperation)({ summary: 'Add vote to selected comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Put)(':id/vote'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, ip_decorator_1.Ip)()),
    __param(3, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "addCommentVote", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiOperation)({ summary: 'Remove vote to selected comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Put)(':id/unvote'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, ip_decorator_1.Ip)()),
    __param(3, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "unVoteComment", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)(':storyId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of comments' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: comment_story_list_ro_1.CommentStoryListRO, isArray: true }),
    __param(0, (0, common_1.Param)('storyId')),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getListOfComments", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveReplyAsComment' }),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(send_comment_schema_1.sendCommentSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        send_comment_dto_1.SendCommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "saveReplyAsComment", null);
exports.CommentController = CommentController = __decorate([
    (0, swagger_1.ApiTags)('Comment'),
    (0, common_1.Controller)('comment'),
    __param(2, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [comment_service_1.CommentService,
        story_service_1.StoryService,
        config_1.ConfigService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map