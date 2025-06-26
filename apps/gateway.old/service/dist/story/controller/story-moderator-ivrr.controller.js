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
exports.StoryIVRRModeratorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const story_moderator_service_1 = require("../service/story-moderator.service");
const passport_1 = require("@nestjs/passport");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const channel_constant_1 = require("../../common/constant/channel.constant");
const story_ivrr_details_mapper_1 = require("../mapper/story-ivrr-details.mapper");
const story_ivrr_moderator_ro_1 = require("../response/story-ivrr-moderator.ro");
const story_historical_translation_moderator_service_1 = require("../service/story-historical-translation-moderator.service");
const languages_constants_1 = require("../../common/constant/languages.constants");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const language_service_1 = require("../../language/language.service");
const story_conversation_service_1 = require("../service/story-conversation.service");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let StoryIVRRModeratorController = class StoryIVRRModeratorController {
    constructor(storyModeratorService, storyHistoricalTranslationModeratorService, languageService, storyConversationService) {
        this.storyModeratorService = storyModeratorService;
        this.storyHistoricalTranslationModeratorService = storyHistoricalTranslationModeratorService;
        this.languageService = languageService;
        this.storyConversationService = storyConversationService;
    }
    async getIvrrStoryDetails(storyId, userLanguageId) {
        var _a;
        console.log('/story/moderator/ivrr/:id', storyId);
        const [story, defaultLanguage] = await Promise.all([
            this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(storyId, channel_constant_1.CHANNEL_CONSTANTS.IVRR),
            this.languageService.getDefaultLanguage(),
        ]);
        const conversation = await this.storyConversationService.findById((_a = story.conversation) === null || _a === void 0 ? void 0 : _a.id, ['ivrrMessages']);
        const historicalContent = await this.storyHistoricalTranslationModeratorService.findHistoricaloriginalContentForStory(story, {
            createdAt: `${story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR ? 'DESC' : 'ASC'}`,
        });
        let otherFeedbackBySameRecipient = [];
        if ((story === null || story === void 0 ? void 0 : story.recipient) && (story.recipient.phone || story.recipient.email)) {
            otherFeedbackBySameRecipient =
                await this.storyModeratorService.getStoriesBySameRecipient(story.recipient.phone, story.recipient.email, story.id);
        }
        return (0, story_ivrr_details_mapper_1.storyIvrrDetailsMapper)(story, conversation, historicalContent === null || historicalContent === void 0 ? void 0 : historicalContent.content, story.languageId, userLanguageId, defaultLanguage, otherFeedbackBySameRecipient);
    }
};
exports.StoryIVRRModeratorController = StoryIVRRModeratorController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular IVRR story',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_ivrr_moderator_ro_1.StoryIvrrModeratorRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.STORY),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StoryIVRRModeratorController.prototype, "getIvrrStoryDetails", null);
exports.StoryIVRRModeratorController = StoryIVRRModeratorController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('IVRR Story Moderator'),
    (0, common_1.Controller)('story/moderator/ivrr'),
    __metadata("design:paramtypes", [story_moderator_service_1.StoryModeratorService,
        story_historical_translation_moderator_service_1.StoryHistoricalTranslationModeratorService,
        language_service_1.LanguageService,
        story_conversation_service_1.StoryConversationService])
], StoryIVRRModeratorController);
//# sourceMappingURL=story-moderator-ivrr.controller.js.map