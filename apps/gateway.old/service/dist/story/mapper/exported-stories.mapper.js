"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportedStoriesMapper = void 0;
const exported_story_ro_1 = require("../response/exported-story.ro");
const class_transformer_1 = require("class-transformer");
const place_mapper_1 = require("../../country/mapper/place.mapper");
const helpers_1 = require("../../common/helpers");
const exportedStoriesMapper = (data, countries, userLanguageId, defaultLanguageId, frontendUrl, storyIds, page, limit) => {
    var _a, _b;
    const countryCodes = {};
    for (const country of countries) {
        countryCodes[country.name] = country.code;
    }
    const items = [];
    for (const key in data) {
        items.push((0, class_transformer_1.plainToClass)(exported_story_ro_1.ExportedStoryRO, Object.assign(Object.assign({}, data[key]), { feedbackId: key, age: (_a = data[key].age) === null || _a === void 0 ? void 0 : _a.replace(/ /g, '_'), gender: (_b = data[key].gender) === null || _b === void 0 ? void 0 : _b.replace(/ /g, '_'), countryCode: countryCodes[data[key].country], location: (0, place_mapper_1.placeMapper)(data[key].administrativeData, userLanguageId, defaultLanguageId, data[key].defaultLanguageIdForAdministrativeData, ', '), communicationChannel: data[key].channel, url: `${frontendUrl}story/details/${key}`, didAnyoneComment: !!data[key].numberOfComments })));
    }
    const response = {
        meta: (0, helpers_1.preparePaginationMetadata)(storyIds, limit, page),
        items,
    };
    response.meta.itemCount = data.length;
    return response;
};
exports.exportedStoriesMapper = exportedStoriesMapper;
//# sourceMappingURL=exported-stories.mapper.js.map