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
exports.StoryController = void 0;
const common_1 = require("@nestjs/common");
const story_service_1 = require("../service/story.service");
const swagger_1 = require("@nestjs/swagger");
const story_ro_1 = require("../response/story.ro");
const story_list_mapper_1 = require("../mapper/story-list.mapper");
const helpers_1 = require("../../common/helpers");
const success_ro_1 = require("../../common/response/success.ro");
const success_mapper_1 = require("../../common/mapper/success.mapper");
const story_mapper_1 = require("../mapper/story.mapper");
const story_list_pagination_ro_1 = require("../response/story-list-pagination.ro");
const add_story_schema_1 = require("../request/schema/add-story-schema");
const add_story_dto_1 = require("../request/dto/add-story.dto");
const shared_1 = require("@ourloop/shared");
const class_transformer_1 = require("class-transformer");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const shared_2 = require("@ourloop/shared");
const passport_1 = require("@nestjs/passport");
const story_filter_and_order_dto_1 = require("../request/dto/story-filter-and-order.dto");
const user_entity_1 = require("../../user/entity/user.entity");
const auth_decorator_1 = require("../../auth/auth.decorator");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const languages_constants_1 = require("../../common/constant/languages.constants");
const ip_decorator_1 = require("../../user/ip.decorator");
const story_list_schema_1 = require("../request/schema/story-list-schema");
const administrative_data_service_1 = require("../../country/service/administrative-data.service");
const language_service_1 = require("../../language/language.service");
const config_1 = require("@nestjs/config");
const di_constant_1 = require("../../common/constant/di.constant");
let StoryController = class StoryController {
    constructor(storyService, administrativeDataService, languageService, config) {
        this.storyService = storyService;
        this.administrativeDataService = administrativeDataService;
        this.languageService = languageService;
        this.config = config;
    }
    testStuff() {
        return this.storyService.removeDuplicateAuthorsScript();
    }
    async getListOfStories(params, userLanguageId) {
        if (!params.page) {
            params.page = 1;
        }
        if (params.searchTerm) {
            params.searchTerm = await this.storyService.sanitizeSearchTerm(params.searchTerm.trim());
        }
        const storyIds = await this.storyService.findStoryIdsByParams(params, false);
        const stories = await this.storyService.findDetailsByStoryIds(params, storyIds);
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        return (0, story_list_mapper_1.storiesToStoriesPaginationRO)(stories, storyIds, params, userLanguageId, defaultLanguage);
    }
    async voteToStory(user, storyId, ipAddress, reqHeaders) {
        const hash = (0, helpers_1.generateHash)(ipAddress, reqHeaders['user-agent']);
        const response = await this.storyService.addNewVote(storyId, hash, user);
        return (0, success_mapper_1.responseToSuccessRO)(response);
    }
    async unVoteStory(user, storyId, ipAddress, reqHeaders) {
        const hash = (0, helpers_1.generateHash)(ipAddress, reqHeaders['user-agent']);
        const response = await this.storyService.removeVote(storyId, hash, user);
        return (0, success_mapper_1.responseToSuccessRO)(response);
    }
    async getStoryDetails(storyId, ipAddress, reqHeaders, userLanguageId) {
        const defaultLanguage = await this.languageService.getDefaultLanguage();
        const story = await this.storyService.findById(storyId, shared_2.STORY_STATUS.PUBLISHED);
        if (story) {
            await this.storyService.addNewView(story, (0, helpers_1.generateHash)(ipAddress, reqHeaders['user-agent']));
        }
        return (0, story_mapper_1.storyToStoryRO)(story, userLanguageId, defaultLanguage);
    }
    async addStory(user, data, ipAddress, reqHeaders, languageId) {
        if (this.config.get('application.onlyGetRequest')) {
            throw new common_1.ForbiddenException();
        }
        const hash = (0, helpers_1.generateHash)(ipAddress, reqHeaders['user-agent']);
        const result = await this.storyService.addStory(languageId, data, hash, user);
        if (Number.isInteger(data.regionId)) {
            await this.administrativeDataService.assignAdministrativeDataToStory(data.regionId, result.id);
        }
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(result === null || result === void 0 ? void 0 : result.id) });
    }
};
exports.StoryController = StoryController;
__decorate([
    (0, common_1.Get)('remove-duplicate-authors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoryController.prototype, "testStuff", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of stories' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: story_list_pagination_ro_1.StoryListPaginationRO, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(story_list_schema_1.storyListSchema))),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [story_filter_and_order_dto_1.StoryFilterAndOrderDto, Number]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getListOfStories", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiOperation)({ summary: 'Add vote to selected story' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Put)(':id/vote'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, ip_decorator_1.Ip)()),
    __param(3, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, String, Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "voteToStory", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiOperation)({ summary: 'Remove vote to selected story' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Put)(':id/unvote'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, ip_decorator_1.Ip)()),
    __param(3, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, String, Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "unVoteStory", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Get story details' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: story_ro_1.StoryRO }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, ip_decorator_1.Ip)()),
    __param(2, (0, common_1.Headers)()),
    __param(3, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Number]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getStoryDetails", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Create new story' }),
    (0, common_1.Post)(),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(add_story_schema_1.addStorySchema))),
    __param(2, (0, ip_decorator_1.Ip)()),
    __param(3, (0, common_1.Headers)()),
    __param(4, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        add_story_dto_1.AddStoryDto, String, Object, Number]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "addStory", null);
exports.StoryController = StoryController = __decorate([
    (0, swagger_1.ApiTags)('Story'),
    (0, common_1.Controller)('story'),
    __param(3, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        administrative_data_service_1.AdministrativeDataService,
        language_service_1.LanguageService,
        config_1.ConfigService])
], StoryController);
//# sourceMappingURL=story.controller.js.map