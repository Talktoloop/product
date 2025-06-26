"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyWebDetailsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const helpers_1 = require("../../common/helpers");
const story_web_moderator_ro_1 = require("../response/story-web-moderator.ro");
const organizations_mapper_1 = require("./organizations.mapper");
const user_mapper_1 = require("../../common/mapper/user.mapper");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const types_1 = require("../../common/types");
const helpers_2 = require("../../common/helpers");
const helpers_3 = require("../../common/helpers");
const place_mapper_1 = require("../../country/mapper/place.mapper");
const storyWebDetailsMapper = (story, historicalContent, storyLanguageId, userLanguageId, defaultLanguage) => {
    var _a, _b, _c, _d, _e, _f, _g;
    console.log('💀'.repeat(10));
    console.log(`storyWebDetailsMapper Entry`);
    const translation = (0, helpers_1.getTranslationByLanguageId)(story.translations, story.languageId, storyLanguageId);
    const place = (0, place_mapper_1.placeMapper)(story.storyAdministrativeData.map((item) => item.administrativeData), userLanguageId, defaultLanguage.id, (_a = story.country) === null || _a === void 0 ? void 0 : _a.defaultLanguageId);
    return (0, class_transformer_1.plainToClass)(story_web_moderator_ro_1.StoryWebModeratorRO, Object.assign(Object.assign({}, story), { difficulty: (0, helpers_2.getKeyByValue)(types_1.DIFFICULTY_VALUE, (_b = story.recipient) === null || _b === void 0 ? void 0 : _b.difficultyByModerator), place: place !== null && place !== void 0 ? place : (0, helpers_3.parseGooglePlacesLocation)(story.place), content: translation === null || translation === void 0 ? void 0 : translation.content, historicalContent: historicalContent !== null && historicalContent !== void 0 ? historicalContent : null, country: (_c = story.country) === null || _c === void 0 ? void 0 : _c.code, language: story.language.code, organisations: (0, organizations_mapper_1.formatOrganisations)(story.organisations), user: story.user ? (0, user_mapper_1.formatUser)(story.user) : null, comments: (_d = story.comments) !== null && _d !== void 0 ? _d : 0, publishedAt: story.publishedAt, createdAt: story.createdAt, emailProvided: !!(((_e = story.recipient) === null || _e === void 0 ? void 0 : _e.email) || ((_f = story.user) === null || _f === void 0 ? void 0 : _f.email)), translations: (0, translations_mapper_1.translationsMapper)(story.translations, null, story.languageId), thematics: (_g = story.thematics) === null || _g === void 0 ? void 0 : _g.map((t) => t.id), contactAccepted: (0, helpers_3.isContactAccepted)(story), age: story.recipient.ageByModerator, gender: story.recipient.genderByModerator, authorNickname: story.recipient.nickname, isUrgent: story.isUrgent, isMinority: story.recipient.isMinority }));
};
exports.storyWebDetailsMapper = storyWebDetailsMapper;
//# sourceMappingURL=story-web-details.mapper.js.map