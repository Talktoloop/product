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
exports.CommentTranslationModeratorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comment_translation_moderator_service_1 = require("../service/comment-translation-moderator.service");
const shared_1 = require("@ourloop/shared");
const success_ro_1 = require("../../common/response/success.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const class_transformer_1 = require("class-transformer");
const passport_1 = require("@nestjs/passport");
const remove_comment_translation_schema_1 = require("../request/schema/remove-comment-translation-schema");
const remove_comment_translation_dto_1 = require("../request/dto/remove-comment-translation.dto");
const verify_comment_translation_schema_1 = require("../request/schema/verify-comment-translation-schema");
const verify_comment_translation_dto_1 = require("../request/dto/verify-comment-translation.dto");
const translation_1 = require("../../common/response/translation");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const save_translation_dto_1 = require("../../common/dto/save-translation.dto");
const add_translation_schema_1 = require("../request/schema/add-translation-schema");
const retry_translation_schema_1 = require("../../common/request/schema/retry-translation-schema");
const retry_translation_dto_1 = require("../../common/dto/retry-translation.dto");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let CommentTranslationModeratorController = class CommentTranslationModeratorController {
    constructor(commentTranslationModeratorService) {
        this.commentTranslationModeratorService = commentTranslationModeratorService;
    }
    async removeStoryTranslation(storyId, data) {
        const result = await this.commentTranslationModeratorService.removeCommentTranslation(storyId, data.language);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.affected) });
    }
    async verifyStoryTranslation(storyId, data) {
        const result = await this.commentTranslationModeratorService.setTranslationAsVerified(storyId, data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.affected) });
    }
    async getTranslationStatus(commentId) {
        const comment = await this.commentTranslationModeratorService.getTranslations(commentId);
        return (0, translations_mapper_1.translationsMapper)(comment.translations, comment.languageId, comment.languageId, false);
    }
    async saveTranslation(commentId, data) {
        const result = await this.commentTranslationModeratorService.saveTranslation(data, commentId);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
    async retryStoryTranslation(storyId, data) {
        const { language } = data;
        const result = await this.commentTranslationModeratorService.retryTranslation(storyId, language);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
};
exports.CommentTranslationModeratorController = CommentTranslationModeratorController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Remove story translation' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.DELETE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Delete)(':id/translation'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(remove_comment_translation_schema_1.removeCommentTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, remove_comment_translation_dto_1.RemoveCommentTranslationDto]),
    __metadata("design:returntype", Promise)
], CommentTranslationModeratorController.prototype, "removeStoryTranslation", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Verify story translation' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id/translation/verify'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(verify_comment_translation_schema_1.verifyCommentTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, verify_comment_translation_dto_1.VerifyCommentTranslationDto]),
    __metadata("design:returntype", Promise)
], CommentTranslationModeratorController.prototype, "verifyStoryTranslation", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: translation_1.TranslationRO, isArray: true }),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of comment translations statuses' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Get)(':id/translation'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentTranslationModeratorController.prototype, "getTranslationStatus", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Add translation to particular comment' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.CREATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Post)(':id/translation'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(add_translation_schema_1.addTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, save_translation_dto_1.SaveTranslationDto]),
    __metadata("design:returntype", Promise)
], CommentTranslationModeratorController.prototype, "saveTranslation", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Retry story translation' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    (0, common_1.Put)(':id/translation/retry'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(retry_translation_schema_1.retryTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, retry_translation_dto_1.RetryTranslationDto]),
    __metadata("design:returntype", Promise)
], CommentTranslationModeratorController.prototype, "retryStoryTranslation", null);
exports.CommentTranslationModeratorController = CommentTranslationModeratorController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Comment Translation Moderator'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, common_1.Controller)('comment/moderator'),
    __metadata("design:paramtypes", [comment_translation_moderator_service_1.CommentTranslationModeratorService])
], CommentTranslationModeratorController);
//# sourceMappingURL=comment-translation-moderator.controller.js.map