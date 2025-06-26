"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StoryConversationRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryConversationRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const story_conversation_entity_1 = require("../entity/story-conversation.entity");
const common_1 = require("@nestjs/common");
let StoryConversationRepository = StoryConversationRepository_1 = class StoryConversationRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(StoryConversationRepository_1.name);
    }
    findByParamsWithRelations(params, relations = null) {
        return this.findOne({
            relations: relations !== null && relations !== void 0 ? relations : null,
            where: params,
        });
    }
    findByStoryUUID(uuid) {
        if (!uuid)
            return;
        return this.findOne({
            where: { uuid },
        });
    }
};
exports.StoryConversationRepository = StoryConversationRepository;
exports.StoryConversationRepository = StoryConversationRepository = StoryConversationRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(story_conversation_entity_1.StoryConversationEntity)
], StoryConversationRepository);
//# sourceMappingURL=story-conversation.repository.js.map