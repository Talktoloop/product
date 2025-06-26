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
exports.StoryConversationService = void 0;
const common_1 = require("@nestjs/common");
const story_conversation_repository_1 = require("../repository/story-conversation.repository");
let StoryConversationService = class StoryConversationService {
    constructor(storyConversationRepository) {
        this.storyConversationRepository = storyConversationRepository;
    }
    async findById(id, relations = null) {
        return this.storyConversationRepository
            .findByParamsWithRelations({ id }, relations)
            .then((data) => (data ? data : null));
    }
    async findByUUID(uuid, relations = null) {
        return this.storyConversationRepository
            .findByParamsWithRelations({ uuid }, relations)
            .then((data) => (data ? data : null));
    }
    async setStoryId(conversationId, storyId) {
        return this.storyConversationRepository.update({ id: conversationId }, { storyId });
    }
    async saveConversation(data) {
        return this.storyConversationRepository.save(data);
    }
};
exports.StoryConversationService = StoryConversationService;
exports.StoryConversationService = StoryConversationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [story_conversation_repository_1.StoryConversationRepository])
], StoryConversationService);
//# sourceMappingURL=story-conversation.service.js.map