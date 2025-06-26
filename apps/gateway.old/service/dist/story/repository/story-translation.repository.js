"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StoryTranslationRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryTranslationRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const story_translation_entity_1 = require("../entity/story-translation.entity");
const common_1 = require("@nestjs/common");
let StoryTranslationRepository = StoryTranslationRepository_1 = class StoryTranslationRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(StoryTranslationRepository_1.name);
    }
    getParticularTranslationForStory(storyId, languageId) {
        if (!storyId)
            return;
        return this.findOne({ where: { storyId, languageId } });
    }
    getStoriesByPhrase(phrase) {
        return this.find({ where: { content: (0, typeorm_1.Like)(`%${phrase}%`) } });
    }
    async findStoryIdsBySearchTerm(searchTerm) {
        return this.createQueryBuilder('translation')
            .select('translation.story_id', 'storyId')
            .where('MATCH(translation.content) AGAINST(:searchTerm IN NATURAL LANGUAGE MODE)', { searchTerm })
            .getRawMany();
    }
};
exports.StoryTranslationRepository = StoryTranslationRepository;
exports.StoryTranslationRepository = StoryTranslationRepository = StoryTranslationRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(story_translation_entity_1.StoryTranslationEntity)
], StoryTranslationRepository);
//# sourceMappingURL=story-translation.repository.js.map