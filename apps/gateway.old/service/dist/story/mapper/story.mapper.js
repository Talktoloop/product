"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyToStoryRO = void 0;
const class_transformer_1 = require("class-transformer");
const story_ro_1 = require("../response/story.ro");
const organizations_mapper_1 = require("./organizations.mapper");
const helpers_1 = require("../../common/helpers");
const user_mapper_1 = require("../../common/mapper/user.mapper");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const types_1 = require("../../common/types");
const helpers_2 = require("../../common/helpers");
const place_mapper_1 = require("../../country/mapper/place.mapper");
const storyToStoryRO = (story, userLanguageId, defaultLanguage) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (story) {
        console.log('💀'.repeat(10));
        console.log(`storyToStoryRO Entry`);
        const translation = (0, helpers_1.getTranslationByLanguageId)(story.translations, story.languageId, userLanguageId);
        const place = (0, place_mapper_1.placeMapper)(story.storyAdministrativeData.map((item) => item.administrativeData), userLanguageId, defaultLanguage.id, (_a = story.country) === null || _a === void 0 ? void 0 : _a.defaultLanguageId);
        return (0, class_transformer_1.plainToClass)(story_ro_1.StoryRO, Object.assign(Object.assign({}, story), { difficulty: (0, helpers_2.getKeyByValue)(types_1.DIFFICULTY_VALUE, (_b = story.recipient) === null || _b === void 0 ? void 0 : _b.difficultyByModerator), place: place !== null && place !== void 0 ? place : (0, helpers_2.parseGooglePlacesLocation)(story.place), country: (_c = story.country) === null || _c === void 0 ? void 0 : _c.code, language: story.language.code, translations: (0, translations_mapper_1.translationsMapper)(story.translations, null, story.languageId), content: translation === null || translation === void 0 ? void 0 : translation.content, contentType: translation === null || translation === void 0 ? void 0 : translation.type, organisations: story ? (0, organizations_mapper_1.formatOrganisations)(story.organisations) : [], user: story ? (0, user_mapper_1.formatUser)(story.user) : null, comments: (_d = story.comments) !== null && _d !== void 0 ? _d : 0, publishedAt: story.publishedAt, thematics: (_e = story.thematics) === null || _e === void 0 ? void 0 : _e.map(({ id }) => id), gender: (_g = (_f = story.recipient) === null || _f === void 0 ? void 0 : _f.genderByModerator) !== null && _g !== void 0 ? _g : null, age: (_j = (_h = story.recipient) === null || _h === void 0 ? void 0 : _h.ageByModerator) !== null && _j !== void 0 ? _j : null, authorNickname: (_l = (_k = story.recipient) === null || _k === void 0 ? void 0 : _k.nickname) !== null && _l !== void 0 ? _l : null, isUrgent: story.isUrgent, isMinority: (_o = (_m = story.recipient) === null || _m === void 0 ? void 0 : _m.isMinority) !== null && _o !== void 0 ? _o : null }));
    }
};
exports.storyToStoryRO = storyToStoryRO;
//# sourceMappingURL=story.mapper.js.map