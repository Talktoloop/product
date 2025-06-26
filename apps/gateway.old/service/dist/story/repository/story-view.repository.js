"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryViewRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const story_view_entity_1 = require("../entity/story-view.entity");
const shared_1 = require("@ourloop/shared");
let StoryViewRepository = class StoryViewRepository extends typeorm_1.Repository {
    async saveViewIfNotExits(story, hash) {
        if (!(story === null || story === void 0 ? void 0 : story.id))
            return false;
        const exist = await this.findOne({ where: [{ storyId: story.id, hash }] });
        if (!exist) {
            try {
                const entity = new story_view_entity_1.StoryViewEntity();
                entity.hash = hash;
                entity.story = story;
                await this.save(entity);
                return true;
            }
            catch (err) {
                throw new shared_1.CustomError(shared_1.ADD_VIEW_ERROR, err);
            }
        }
        return false;
    }
};
exports.StoryViewRepository = StoryViewRepository;
exports.StoryViewRepository = StoryViewRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(story_view_entity_1.StoryViewEntity)
], StoryViewRepository);
//# sourceMappingURL=story-view.repository.js.map