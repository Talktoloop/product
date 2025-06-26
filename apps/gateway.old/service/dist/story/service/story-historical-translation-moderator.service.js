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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryHistoricalTranslationModeratorService = void 0;
const common_1 = require("@nestjs/common");
const story_historical_translation_repository_1 = require("../repository/story-historical-translation.repository");
let StoryHistoricalTranslationModeratorService = class StoryHistoricalTranslationModeratorService {
    constructor(storyHistoricalTranslationRepository) {
        this.storyHistoricalTranslationRepository = storyHistoricalTranslationRepository;
    }
    async findHistoricaloriginalContentForStory(story, order = { createdAt: 'ASC' }) {
        const originalContent = story.translations.find((item) => item.languageId === story.languageId);
        return this.findOneByIdAndOrder(originalContent.id, order, true);
    }
    async findOneByIdAndOrder(id, order, isRecoverable) {
        const params = {
            translationId: id,
        };
        if (isRecoverable !== undefined) {
            params.isRecoverable = isRecoverable;
        }
        return this.storyHistoricalTranslationRepository.findOne({
            where: params,
            order,
        });
    }
    contentIsDefined(value) {
        return value && value !== '';
    }
    async save(data) {
        const previousEntry = await this.findOneByIdAndOrder(data.translationId, {
            createdAt: 'DESC',
        });
        if (!data.translationId ||
            !this.contentIsDefined(data.content) ||
            (previousEntry === null || previousEntry === void 0 ? void 0 : previousEntry.content) === data.content) {
            return;
        }
        return this.storyHistoricalTranslationRepository.save(data);
    }
};
exports.StoryHistoricalTranslationModeratorService = StoryHistoricalTranslationModeratorService;
exports.StoryHistoricalTranslationModeratorService = StoryHistoricalTranslationModeratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [story_historical_translation_repository_1.StoryHistoricalTranslationRepository])
], StoryHistoricalTranslationModeratorService);
//# sourceMappingURL=story-historical-translation-moderator.service.js.map