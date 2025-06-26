"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customDatePeriodValidation = exports.convertStringToArray = exports.clearPhoneNumber = exports.stripHtmlTags = exports.convertBooleanString = exports.filterNumericIds = void 0;
const helpers_1 = require("../../common/helpers");
const date_fns_1 = require("date-fns");
const filterNumericIds = (value) => value
    .split(',')
    .map((element) => Number.isInteger(parseInt(element)) ? element : undefined)
    .filter((element) => element)
    .join(',');
exports.filterNumericIds = filterNumericIds;
const convertBooleanString = (value) => ['true', true].includes(value);
exports.convertBooleanString = convertBooleanString;
const stripHtmlTags = (value) => String(value)
    .replace(/<[^>]+>/gm, '')
    .replace(/\s\s+/g, ' ');
exports.stripHtmlTags = stripHtmlTags;
const clearPhoneNumber = (value) => {
    value = (0, helpers_1.replaceArray)(value, ['\\s+', '\\+', '\\-', '\\(', '\\)'], '');
    if (value.substr(0, 2) === '00') {
        value = value.substr(2);
    }
    return `+${value}`;
};
exports.clearPhoneNumber = clearPhoneNumber;
const convertStringToArray = (value) => value.split(',');
exports.convertStringToArray = convertStringToArray;
const customDatePeriodValidation = (params, helpers) => {
    if (!params.from && !params.to) {
        return params;
    }
    if (params.from && !(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(params.from))) {
        return helpers.error('any.invalid');
    }
    if (params.to && !(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(params.to))) {
        return helpers.error('any.invalid');
    }
    if (params.from &&
        params.to &&
        !(0, date_fns_1.differenceInMilliseconds)(new Date(params.to), new Date(params.from))) {
        return helpers.error('any.invalid');
    }
    return params;
};
exports.customDatePeriodValidation = customDatePeriodValidation;
//# sourceMappingURL=custom.joi.js.map