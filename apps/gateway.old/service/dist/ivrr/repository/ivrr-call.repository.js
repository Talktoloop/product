"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvrrCallRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const ivrr_call_entity_1 = require("../entity/ivrr-call.entity");
const translation_status_constants_1 = require("../../common/constant/translation-status.constants");
const shared_1 = require("@ourloop/shared");
let IvrrCallRepository = class IvrrCallRepository extends typeorm_1.Repository {
    async findStoryCallsByLanguageCodeAndDuration(params) {
        const query = this.createQueryBuilder('call')
            .select('call.id', 'id')
            .addSelect('call.s3FileId', 's3FileId')
            .addSelect('language.transcribeLang', 'languageCode')
            .addSelect('conversation.storyId', 'storyId')
            .innerJoin('call.conversation', 'conversation')
            .innerJoin('conversation.language', 'language')
            .innerJoin('conversation.story', 'story')
            .innerJoin('story.translations', 'translations', '(translations.content = "" or translations.content is null) and translations.language_id = story.language_id')
            .where(`call.recordingDuration >= :duration`, {
            duration: params.minDuration,
        })
            .andWhere('language.code = :language', { language: params.language })
            .andWhere(`story.status NOT IN (:statuses)`, {
            statuses: [
                shared_1.STORY_STATUS.PUBLISHED,
                shared_1.STORY_STATUS.REJECTED,
                shared_1.STORY_STATUS.CONDITIONALLY_REJECTED,
            ],
        })
            .andWhere('call.isStory is true')
            .andWhere(new typeorm_1.Brackets((qb) => {
            qb.where('call.transcriptionStatus is null').orWhere('call.transcriptionStatus != :transcriptionStatus', {
                transcriptionStatus: translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR,
            });
        }))
            .andWhere(new typeorm_1.Brackets((qb) => {
            qb.where('call.content is null').orWhere('call.content = ""');
        }));
        return query.execute();
    }
};
exports.IvrrCallRepository = IvrrCallRepository;
exports.IvrrCallRepository = IvrrCallRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(ivrr_call_entity_1.IvrrCallEntity)
], IvrrCallRepository);
//# sourceMappingURL=ivrr-call.repository.js.map