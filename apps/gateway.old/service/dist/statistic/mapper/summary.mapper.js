"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryMapper = void 0;
const date_fns_1 = require("date-fns");
const summaryMapper = (data) => {
    return {
        numberOfOrganisations: data.organisations.length,
        numberOfLanguages: data.languages.length,
        numberOfFeedback: data.storyIds.length,
        numberOfComments: data.commentIds.length,
        currentTime: (0, date_fns_1.formatISO)(new Date()),
    };
};
exports.summaryMapper = summaryMapper;
//# sourceMappingURL=summary.mapper.js.map