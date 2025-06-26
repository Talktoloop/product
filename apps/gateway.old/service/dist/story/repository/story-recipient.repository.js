"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StoryRecipientRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryRecipientRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const story_recipient_entity_1 = require("../entity/story-recipient.entity");
const shared_1 = require("@ourloop/shared");
const common_1 = require("@nestjs/common");
let StoryRecipientRepository = StoryRecipientRepository_1 = class StoryRecipientRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(StoryRecipientRepository_1.name);
    }
    async findDataToExport() {
        return this.createQueryBuilder('recipient')
            .select('recipient.gender_by_moderator', 'genderByModerator')
            .addSelect('recipient.age_by_moderator', 'ageByModerator')
            .addSelect('story.id', 'storyId')
            .innerJoin('recipient.story', 'story', 'story.recipient_id = recipient.id')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED })
            .execute()
            .catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_STORY_FAILED);
        });
    }
    findLastEntryByCommunicatorId(communicatorId, relations = null) {
        if (!communicatorId)
            return;
        return this.findOne({
            where: { communicatorId },
            relations: relations !== null && relations !== void 0 ? relations : null,
            order: { createdAt: 'DESC' },
        });
    }
    async findStoryIdsByMinority(isMinority) {
        return this.createQueryBuilder('recipient')
            .select('story.id', 'storyId')
            .innerJoin('recipient.story', 'story')
            .where('recipient.is_minority_by_moderator = :isMinority', { isMinority })
            .getRawMany();
    }
};
exports.StoryRecipientRepository = StoryRecipientRepository;
exports.StoryRecipientRepository = StoryRecipientRepository = StoryRecipientRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(story_recipient_entity_1.StoryRecipientEntity)
], StoryRecipientRepository);
//# sourceMappingURL=story-recipient.repository.js.map