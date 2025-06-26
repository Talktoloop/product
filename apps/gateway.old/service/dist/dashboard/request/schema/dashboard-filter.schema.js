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
exports.dashboardFilterSchema = void 0;
const Joi = __importStar(require("joi"));
const language_schema_1 = require("../../../common/request/schema/language.schema");
const filter_schema_1 = require("../../../common/request/schema/filter.schema");
const custom_joi_1 = require("../../../common/request/custom.joi");
const custom_joi_2 = require("../../../common/request/custom.joi");
exports.dashboardFilterSchema = Joi.object(Object.assign(Object.assign({}, filter_schema_1.filterConditions), { language: language_schema_1.languageSchema.language, status: Joi.string().trim(), isSensitive: Joi.boolean(), durationMin: Joi.number().min(0), durationMax: Joi.number().min(Joi.ref('durationMin', {
        adjust: (value) => value !== null && value !== void 0 ? value : 0,
    })), searchTerm: Joi.string().min(0).max(255).custom(custom_joi_2.stripHtmlTags) }))
    .custom(custom_joi_1.customDatePeriodValidation)
    .options({ presence: 'optional' });
//# sourceMappingURL=dashboard-filter.schema.js.map