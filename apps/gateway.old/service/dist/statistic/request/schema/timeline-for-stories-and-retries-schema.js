"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timelineForStoriesAndRetriesSchema = void 0;
const Joi = __importStar(require("joi"));
const date_fns_1 = require("date-fns");
const filter_schema_1 = require("../../../common/request/schema/filter.schema");
exports.timelineForStoriesAndRetriesSchema = Joi.object({
    country: filter_schema_1.filterConditions.country,
    type: filter_schema_1.filterConditions.type,
    regionId: filter_schema_1.filterConditions.regionId,
    age: filter_schema_1.filterConditions.age,
    gender: filter_schema_1.filterConditions.gender,
    difficulty: filter_schema_1.filterConditions.difficulty,
    organisation: filter_schema_1.filterConditions.organisation,
    thematic: filter_schema_1.filterConditions.thematic,
    from: Joi.date().iso().required(),
    to: Joi.date()
        .iso()
        .min(Joi.ref('from', {
        adjust: (value) => {
            return new Date(value);
        },
    }))
        .max(Joi.ref('from', {
        adjust: (value) => {
            return (0, date_fns_1.addMonths)(new Date(value), 11);
        },
    }))
        .required(),
});
//# sourceMappingURL=timeline-for-stories-and-retries-schema.js.map