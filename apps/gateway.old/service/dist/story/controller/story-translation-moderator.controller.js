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
exports.StoryTranslationModeratorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const story_translation_moderator_service_1 = require("../service/story-translation-moderator.service");
const shared_1 = require("@ourloop/shared");
const success_ro_1 = require("../../common/response/success.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const class_transformer_1 = require("class-transformer");
const passport_1 = require("@nestjs/passport");
const remove_story_translation_schema_1 = require("../request/schema/remove-story-translation-schema");
const remove_story_translation_dto_1 = require("../request/dto/remove-story-translation.dto");
const verify_story_translation_schema_1 = require("../request/schema/verify-story-translation-schema");
const verify_story_translation_dto_1 = require("../request/dto/verify-story-translation.dto");
const translation_1 = require("../../common/response/translation");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const save_translation_dto_1 = require("../../common/dto/save-translation.dto");
const save_translation_schema_1 = require("../request/schema/save-translation-schema");
const retry_translation_schema_1 = require("../../common/request/schema/retry-translation-schema");
const retry_translation_dto_1 = require("../../common/dto/retry-translation.dto");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../../user/entity/user.entity");
const story_service_1 = require("../service/story.service");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
let StoryTranslationModeratorController = class StoryTranslationModeratorController {
    constructor(storyService, storyTranslationModeratorService) {
        this.storyService = storyService;
        this.storyTranslationModeratorService = storyTranslationModeratorService;
    }
    async removeStoryTranslation(storyId, data) {
        const result = await this.storyTranslationModeratorService.removeStoryTranslation(storyId, data.language);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.affected) });
    }
    async verifyStoryTranslation(storyId, data) {
        const result = await this.storyTranslationModeratorService.setTranslationAsVerified(storyId, data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.affected) });
    }
    async getTranslationStatus(storyId) {
        const story = await this.storyTranslationModeratorService.getTranslations(storyId);
        return (0, translations_mapper_1.translationsMapper)(story.translations, story.languageId, story.languageId, false);
    }
    async restoreOriginalContent(user, storyId) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'removeStoryTranslation', ['translations', 'translations.language', 'language']);
        const result = await this.storyTranslationModeratorService.restoreOriginalContent(user.id, story);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: result });
    }
    async saveTranslation(user, storyId, data) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'saveTranslation', ['translations', 'translations.language', 'language']);
        if (story.status == shared_1.STORY_STATUS.PUBLISHED) {
            throw new common_1.BadRequestException(shared_1.STORY_IS_ALREADY_PUBLISHED);
        }
        const result = await this.storyTranslationModeratorService.saveTranslation(data, story, user.id);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
    async retryStoryTranslation(storyId, data) {
        const { language } = data;
        const result = await this.storyTranslationModeratorService.retryTranslation(storyId, language);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
};
exports.StoryTranslationModeratorController = StoryTranslationModeratorController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Remove story translation' }),
    (0, common_1.Delete)(':id/translation'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.DELETE, permission_enum_1.CERBOS_RESOURCES.TRANSLATION),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(remove_story_translation_schema_1.removeStoryTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, remove_story_translation_dto_1.RemoveStoryTranslationDto]),
    __metadata("design:returntype", Promise)
], StoryTranslationModeratorController.prototype, "removeStoryTranslation", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Verify story translation' }),
    (0, common_1.Put)(':id/translation/verify'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.TRANSLATION),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(verify_story_translation_schema_1.verifyStoryTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, verify_story_translation_dto_1.VerifyStoryTranslationDto]),
    __metadata("design:returntype", Promise)
], StoryTranslationModeratorController.prototype, "verifyStoryTranslation", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: translation_1.TranslationRO, isArray: true }),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of story translation statuses' }),
    (0, common_1.Get)(':id/translation'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.TRANSLATION),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryTranslationModeratorController.prototype, "getTranslationStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Restore original story content' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Put)(':id/translation/restore'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.TRANSLATION),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], StoryTranslationModeratorController.prototype, "restoreOriginalContent", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Set translation to particular story' }),
    (0, common_1.Put)(':id/translation'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.TRANSLATION),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, common_1.Body)(new shared_1.ValidationPipe(save_translation_schema_1.saveTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, save_translation_dto_1.SaveTranslationDto]),
    __metadata("design:returntype", Promise)
], StoryTranslationModeratorController.prototype, "saveTranslation", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Retry story translation' }),
    (0, common_1.Put)(':id/translation/retry'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.TRANSLATION),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(retry_translation_schema_1.retryTranslationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, retry_translation_dto_1.RetryTranslationDto]),
    __metadata("design:returntype", Promise)
], StoryTranslationModeratorController.prototype, "retryStoryTranslation", null);
exports.StoryTranslationModeratorController = StoryTranslationModeratorController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Story Translation Moderator'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, common_1.Controller)('story/moderator'),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        story_translation_moderator_service_1.StoryTranslationModeratorService])
], StoryTranslationModeratorController);
//# sourceMappingURL=story-translation-moderator.controller.js.map