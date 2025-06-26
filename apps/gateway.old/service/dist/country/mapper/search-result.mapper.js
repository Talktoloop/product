"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchResultMapper = void 0;
const class_transformer_1 = require("class-transformer");
const search_result_ro_1 = require("../response/search-result.ro");
const default_1 = require("../../config/default");
const administrative_data_mapper_1 = require("./administrative-data.mapper");
const helpers_1 = require("../../common/helpers");
const searchResultMapper = (country, params, userLanguageId, defaultLanguage, data) => {
    var _a;
    let firstLevelChildrenItems = [];
    let anotherLevelChildrenItems = [];
    let anotherItems = (0, administrative_data_mapper_1.filterAdministrativeDataByLanguage)(data.items, userLanguageId, defaultLanguage.id);
    if (params.parentId) {
        const anotherLevelChildrenIds = [];
        const firstLevelChildrenIds = [];
        for (const id in data.parents) {
            if (((_a = data.parents[id][0]) === null || _a === void 0 ? void 0 : _a.id) === params.parentId) {
                firstLevelChildrenIds.push(parseInt(id));
            }
            else if (data.parents[id].find((item) => item.id === params.parentId)) {
                anotherLevelChildrenIds.push(parseInt(id));
            }
        }
        firstLevelChildrenItems = anotherItems.filter((item) => firstLevelChildrenIds.includes(item.id));
        anotherLevelChildrenItems = anotherItems.filter((item) => anotherLevelChildrenIds.includes(item.id));
        anotherItems = anotherItems.filter((item) => !firstLevelChildrenIds.includes(item.id) &&
            !anotherLevelChildrenIds.includes(item.id));
    }
    let items = [];
    for (const list of [
        firstLevelChildrenItems,
        anotherLevelChildrenItems,
        anotherItems,
    ]) {
        items = [
            ...items,
            ...list.sort((prev, next) => {
                const prevPosition = (0, helpers_1.upperCaseString)(prev.name).indexOf((0, helpers_1.upperCaseString)(params.phrase));
                const nextPosition = (0, helpers_1.upperCaseString)(next.name).indexOf((0, helpers_1.upperCaseString)(params.phrase));
                return ((prevPosition < 0
                    ? default_1.staticConfig.administrativeData.maximumLengthOfName
                    : prevPosition) -
                    (nextPosition < 0
                        ? default_1.staticConfig.administrativeData.maximumLengthOfName
                        : nextPosition));
            }),
        ];
    }
    items = items.slice(0, default_1.staticConfig.administrativeData.searchResultLimit);
    return (0, class_transformer_1.plainToClass)(search_result_ro_1.SearchResultRO, {
        countryCode: country.code,
        items: items.map((item) => {
            var _a, _b, _c;
            const parentNames = (_b = (_a = data.parents[item.id]) === null || _a === void 0 ? void 0 : _a.find((parent) => parent.id === item.parentId)) === null || _b === void 0 ? void 0 : _b.names;
            const variant = (0, administrative_data_mapper_1.findAdministrativeDataByLanguage)(parentNames, userLanguageId, defaultLanguage.id, item.defaultLanguageIdForAdministrativeData);
            return (0, class_transformer_1.plainToClass)(search_result_ro_1.SearchResultItemRO, Object.assign(Object.assign({}, item), { parentName: (_c = variant === null || variant === void 0 ? void 0 : variant.name) !== null && _c !== void 0 ? _c : null, hasChild: !!item.hasChild }));
        }),
    });
};
exports.searchResultMapper = searchResultMapper;
//# sourceMappingURL=search-result.mapper.js.map