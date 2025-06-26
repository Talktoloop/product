"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storiesToStoriesPaginationRO = exports.mapStoryDetails = exports.storiesToStoriesRO = void 0;
const class_transformer_1 = require("class-transformer");
const story_list_ro_1 = require("../response/story-list.ro");
const helpers_1 = require("../../common/helpers");
const organizations_mapper_1 = require("./organizations.mapper");
const user_mapper_1 = require("../../common/mapper/user.mapper");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const place_mapper_1 = require("../../country/mapper/place.mapper");
const storiesToStoriesRO = (stories) => {
    return stories.map((story) => (0, class_transformer_1.plainToClass)(story_list_ro_1.StoryListRO, Object.assign({}, story)));
};
exports.storiesToStoriesRO = storiesToStoriesRO;
const mapStoryDetails = (story, translations, organisations, categories, thematicIds, administrativeData, userLanguageId, defaultLanguage) => {
    var _a;
    console.log('💀'.repeat(10));
    console.log(`mapStoryDetails Entry`);
    const translation = (0, helpers_1.getTranslationByLanguageId)(translations, story.languageId, userLanguageId);
    const place = (0, place_mapper_1.placeMapper)(administrativeData, userLanguageId, defaultLanguage.id, Number(story.defaultLanguageIdForAdministrativeData));
    story.place = place !== null && place !== void 0 ? place : (0, helpers_1.parseGooglePlacesLocation)(story.place);
    story.content = translation === null || translation === void 0 ? void 0 : translation.content;
    story.contentType = translation === null || translation === void 0 ? void 0 : translation.type;
    story.organisations = (0, organizations_mapper_1.formatOrganisations)(organisations);
    story.categories = categories;
    story.thematics = thematicIds;
    story.language = (_a = translations.find((translation) => translation.languageId === story.languageId)) === null || _a === void 0 ? void 0 : _a.language.code;
    story.translations = (0, translations_mapper_1.translationsMapper)(translations, null, story.languageId);
    return (0, class_transformer_1.plainToClass)(story_list_ro_1.StoryListRO, story);
};
exports.mapStoryDetails = mapStoryDetails;
const storiesToStoriesPaginationRO = (data, storyIds, params, languageId, defaultLanguage) => {
    const items = [];
    let story;
    let translations = [];
    let translationIds = [];
    let organisations = [];
    let categories = [];
    let categoryIds = [];
    let thematicIds = [];
    let organisationIds = [];
    let administrativeDataNameIds = [];
    let administrativeData = [];
    for (const item of data) {
        if ((story === null || story === void 0 ? void 0 : story.id) !== item.story_id) {
            if (story) {
                items.push((0, exports.mapStoryDetails)(story, translations, organisations, categories, thematicIds, administrativeData, languageId, defaultLanguage));
            }
            translations = [];
            translationIds = [];
            organisations = [];
            categories = [];
            categoryIds = [];
            thematicIds = [];
            organisationIds = [];
            administrativeData = [];
            administrativeDataNameIds = [];
            story = {
                id: item.story_id,
                votes: item.vote_count,
                views: item.view_count,
                channel: item.story_channel,
                country: item.country_code,
                place: item.story_place,
                authorNickname: item.recipient_nickname,
                defaultLanguageIdForAdministrativeData: item.country_default_language_id_for_administrative_data,
                user: item.user_id
                    ? (0, user_mapper_1.formatUser)({
                        organisation: {
                            name: item.organisation_name,
                        },
                    })
                    : null,
                comments: item.story_comments,
                publishedAt: item.story_published_at,
                languageId: item.story_language_id,
            };
        }
        if (item.translations_id &&
            !translationIds.includes(item.translations_id)) {
            translationIds.push(item.translations_id);
            translations.push({
                id: item.translations_id,
                content: item.translations_content,
                type: item.translations_type,
                languageId: item.translations_language_id,
                status: item.translations_status,
                language: {
                    code: item.language_code,
                    isDefault: !!item.language_is_default,
                },
                storyId: item.translations_story_id,
            });
        }
        if (item.organisations_id &&
            !organisationIds.includes(item.organisations_id)) {
            organisationIds.push(item.organisations_id);
            organisations.push({
                id: item.organisations_id,
                name: item.organisations_name,
                replied: item.organisations_replied,
                verified: item.organisations_verified,
            });
        }
        if (item.categories_id &&
            !categoryIds.includes(item.categories_id)) {
            categoryIds.push(item.categories_id);
            categories.push({
                id: item.categories_id,
                code: item.categories_code,
                order: item.categories_order
            });
        }
        if (!thematicIds.includes(item.thematic_id)) {
            thematicIds.push(item.thematic_id);
        }
        if (item.administrativeDataNames_id &&
            !administrativeDataNameIds.includes(item.administrativeDataNames_id)) {
            const element = administrativeData.find((obj) => obj.id === item.administrativeData_id);
            if (!element) {
                administrativeData.push({
                    id: item.administrativeData_id,
                    level: item.administrativeData_level,
                    names: [
                        {
                            name: item.administrativeDataNames_name,
                            languageId: item.administrativeDataNames_language_id,
                        },
                    ],
                });
            }
            else {
                element.names.push({
                    name: item.administrativeDataNames_name,
                    languageId: item.administrativeDataNames_language_id,
                });
            }
            administrativeDataNameIds.push(item.administrativeDataNames_id);
        }
    }
    if (story) {
        items.push((0, exports.mapStoryDetails)(story, translations, organisations, categories, thematicIds, administrativeData, languageId, defaultLanguage));
    }
    const response = {
        meta: (0, helpers_1.preparePaginationMetadata)(storyIds, params.limit, params.page),
        items,
    };
    response.meta.itemCount = items.length;
    return response;
};
exports.storiesToStoriesPaginationRO = storiesToStoriesPaginationRO;
//# sourceMappingURL=story-list.mapper.js.map