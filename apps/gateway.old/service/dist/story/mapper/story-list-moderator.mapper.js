"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pendingStoriesMapper = void 0;
const class_transformer_1 = require("class-transformer");
const story_list_moderator_ro_1 = require("../response/story-list-moderator.ro");
const pendingStoriesMapper = (pendingStories) => pendingStories.map((story) => {
    return (0, class_transformer_1.plainToClass)(story_list_moderator_ro_1.StoryListModeratorRO, Object.assign(Object.assign({}, story), { country: story.countryCode, language: story.languageCode, types: story.categories.map((categoryCode) => categoryCode) }));
});
exports.pendingStoriesMapper = pendingStoriesMapper;
//# sourceMappingURL=story-list-moderator.mapper.js.map