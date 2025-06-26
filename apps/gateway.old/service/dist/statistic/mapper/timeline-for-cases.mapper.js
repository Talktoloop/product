"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timelineForCasesMapper = void 0;
const helpers_1 = require("../../common/helpers");
const allegation_type_constant_1 = require("../../airtable-client/constant/allegation-type.constant");
const helpers_2 = require("../../common/helpers");
const date_fns_1 = require("date-fns");
const setValue = (response, code, data) => {
    const categoryDetails = response.find((item) => item.code === code);
    const arrayItem = categoryDetails === null || categoryDetails === void 0 ? void 0 : categoryDetails.values.find((value) => value[0] === data.month);
    if (arrayItem) {
        arrayItem[1] = data.count;
    }
};
const timelineForCasesMapper = (params, casesWithAllegationTypeByPeriod, urgentCasesByPeriod) => {
    let start = (0, date_fns_1.startOfDay)(new Date(params.from));
    const dates = [];
    while ((0, date_fns_1.differenceInMilliseconds)((0, date_fns_1.endOfDay)(new Date(params.to)), start) > 0) {
        dates.push([(0, date_fns_1.format)(start, 'yyyy-MM'), 0]);
        start = (0, date_fns_1.addMonths)(start, 1);
    }
    const response = Object.keys(allegation_type_constant_1.ALLEGATION_TYPE_TEXT).map((allegationType) => ({
        code: allegationType,
        values: (0, helpers_1.cloneArrayWithoutReference)(dates),
    }));
    for (const row of casesWithAllegationTypeByPeriod) {
        setValue(response, (0, helpers_2.getKeyByValue)(allegation_type_constant_1.ALLEGATION_TYPE_TEXT, row.code, false), row);
    }
    response.push({
        code: 'urgentCases',
        values: (0, helpers_1.cloneArrayWithoutReference)(dates),
    });
    for (const row of urgentCasesByPeriod) {
        setValue(response, 'urgentCases', row);
    }
    return response;
};
exports.timelineForCasesMapper = timelineForCasesMapper;
//# sourceMappingURL=timeline-for-cases.mapper.js.map