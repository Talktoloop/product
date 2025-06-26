"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.casesGroupedByAllegationAndAuthorPerspectiveMapper = void 0;
const author_perspective_constant_1 = require("../../airtable-client/constant/author-perspective.constant");
const allegation_type_constant_1 = require("../../airtable-client/constant/allegation-type.constant");
const helpers_1 = require("../../common/helpers");
const casesGroupedByAllegationAndAuthorPerspectiveMapper = (data) => {
    const authorPerspectives = Object.values(author_perspective_constant_1.AUTHOR_PERSPECTIVE);
    const filteredAuthorPerspectiveKeys = Object.values(author_perspective_constant_1.AUTHOR_PERSPECTIVE).filter((key) => key != author_perspective_constant_1.AUTHOR_PERSPECTIVE.other);
    return Object.keys(allegation_type_constant_1.ALLEGATION_TYPE_TEXT).map((key) => {
        var _a, _b;
        const values = [];
        for (const perspective of authorPerspectives) {
            values.push((_b = (_a = data.find((item) => item.allegationType === allegation_type_constant_1.ALLEGATION_TYPE_TEXT[key] &&
                (perspective !== author_perspective_constant_1.AUTHOR_PERSPECTIVE.other
                    ? item.authorPerspective === perspective
                    : !filteredAuthorPerspectiveKeys.includes(item.authorPerspective)))) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
        }
        return {
            type: key,
            values: (0, helpers_1.cloneArrayWithoutReference)(values),
            isAnonymousData: false,
        };
    });
};
exports.casesGroupedByAllegationAndAuthorPerspectiveMapper = casesGroupedByAllegationAndAuthorPerspectiveMapper;
//# sourceMappingURL=cases-grouped-by-allegation-and-author-perspective.mapper.js.map