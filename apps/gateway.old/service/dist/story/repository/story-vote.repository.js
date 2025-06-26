"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryVoteRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const story_vote_entity_1 = require("../entity/story-vote.entity");
const shared_1 = require("@ourloop/shared");
let StoryVoteRepository = class StoryVoteRepository extends typeorm_1.Repository {
    async saveVoteIfNotExits(story, hash, user) {
        if (!(story === null || story === void 0 ? void 0 : story.id))
            return false;
        const exist = await this.findOne({ where: [{ storyId: story.id, hash }] });
        if (!exist) {
            try {
                const entity = new story_vote_entity_1.StoryVoteEntity();
                entity.hash = hash;
                entity.story = story;
                if (user) {
                    entity.user = user;
                }
                await this.save(entity);
                return true;
            }
            catch (err) {
                throw new shared_1.CustomError(shared_1.ADD_VOTE_STORY_ERROR, err);
            }
        }
        return false;
    }
    async removeVoteIfNotExits(story, hash, user) {
        let where = { storyId: story.id };
        if (user) {
            where = Object.assign(Object.assign({}, where), { userId: user.id });
        }
        else {
            where = Object.assign(Object.assign({}, where), { hash });
        }
        try {
            const vote = await this.findOne({ where });
            if (vote) {
                await this.remove(vote);
                return true;
            }
        }
        catch (err) {
            throw new shared_1.CustomError(shared_1.REMOVE_VOTE_STORY_ERROR, err);
        }
        return false;
    }
};
exports.StoryVoteRepository = StoryVoteRepository;
exports.StoryVoteRepository = StoryVoteRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(story_vote_entity_1.StoryVoteEntity)
], StoryVoteRepository);
//# sourceMappingURL=story-vote.repository.js.map