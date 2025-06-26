"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.casesGroupedByCaseAccountabilityAndOrganisationTypeMapper = void 0;
const case_accountability_constant_1 = require("../../airtable-client/constant/case-accountability.constant");
const organisation_type_constant_1 = require("../../airtable-client/constant/organisation-type.constant");
const helpers_1 = require("../../common/helpers");
const casesGroupedByCaseAccountabilityAndOrganisationTypeMapper = (data) => {
    var _a, _b;
    const caseAccountabilityKeys = Object.keys(case_accountability_constant_1.CASE_ACCOUNTABILITY);
    const organisationTypes = Object.values(organisation_type_constant_1.ORGANISATION_TYPE_TEXT);
    const filteredOrganisationKeys = Object.values(organisation_type_constant_1.ORGANISATION_TYPE_TEXT).filter((key) => key != organisation_type_constant_1.ORGANISATION_TYPE_TEXT.other);
    const result = [];
    for (const index in data) {
        const values = [];
        for (const type of organisationTypes) {
            values.push((_b = (_a = data[index].find((item) => type !== organisation_type_constant_1.ORGANISATION_TYPE_TEXT.other
                ? item.organisationType === type
                : !filteredOrganisationKeys.includes(item.organisationType))) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
        }
        result.push({
            type: caseAccountabilityKeys[index],
            values: (0, helpers_1.cloneArrayWithoutReference)(values),
        });
    }
    return result;
};
exports.casesGroupedByCaseAccountabilityAndOrganisationTypeMapper = casesGroupedByCaseAccountabilityAndOrganisationTypeMapper;
//# sourceMappingURL=cases-grouped-by-case_accountability-and-organisation_type.mapper.js.map