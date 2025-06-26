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
exports.exportToJsonSchema = void 0;
const Joi = __importStar(require("joi"));
const custom_joi_1 = require("../../../common/request/custom.joi");
const list_with_pagination_joi_1 = require("../../../common/request/list-with-pagination.joi");
const types_1 = require("../../../common/types");
const difficulty_constant_1 = require("../../../airtable-client/constant/difficulty.constant");
const helpers_1 = require("../../../common/helpers");
exports.exportToJsonSchema = Joi.object({
    order: list_with_pagination_joi_1.listWithPaginationSchemaObject.order,
    limit: list_with_pagination_joi_1.listWithPaginationSchemaObject.limit.min(1).max(500),
    page: list_with_pagination_joi_1.listWithPaginationSchemaObject.page.min(1),
    country: Joi.alternatives().try(Joi.string().custom(custom_joi_1.convertStringToArray), Joi.array().items(Joi.string()), Joi.allow(null)),
    type: Joi.alternatives().try(Joi.string()
        .valid(...Object.values(types_1.CATEGORY_VALUE))
        .custom(custom_joi_1.convertStringToArray), Joi.array().items(Joi.string().valid(...Object.values(types_1.CATEGORY_VALUE))), Joi.allow(null)),
    age: Joi.alternatives().try(Joi.string()
        .valid(...Object.values(types_1.AGE_VALUE))
        .custom(custom_joi_1.convertStringToArray), Joi.array().items(Joi.string().valid(...Object.values(types_1.AGE_VALUE))), Joi.allow(null)),
    gender: Joi.alternatives().try(Joi.string()
        .valid(...Object.values(types_1.GENDER_VALUE))
        .custom(custom_joi_1.convertStringToArray), Joi.array().items(Joi.string().valid(...Object.values(types_1.GENDER_VALUE))), Joi.allow(null)),
    difficulty: Joi.alternatives().try(Joi.string()
        .valid(...Object.values(difficulty_constant_1.DIFFICULTY))
        .custom(custom_joi_1.convertStringToArray), Joi.array().items(Joi.string().valid(...Object.values(difficulty_constant_1.DIFFICULTY))), Joi.allow(null)),
    organisation: Joi.string().min(3).max(255).custom(custom_joi_1.stripHtmlTags),
    thematic: Joi.alternatives().try(Joi.string()
        .valid(...(0, helpers_1.getThematicAreaChildrenKeys)())
        .custom(custom_joi_1.convertStringToArray), Joi.array().items(Joi.string().valid(...(0, helpers_1.getThematicAreaChildrenKeys)())), Joi.allow(null)),
    from: Joi.date().iso(),
    to: Joi.date()
        .iso()
        .min(Joi.ref('from', {
        adjust: (value) => {
            return value ? new Date(value) : 0;
        },
    })),
    searchTerm: Joi.string().min(0).max(255).custom(custom_joi_1.stripHtmlTags),
}).options({
    presence: 'optional',
});
//# sourceMappingURL=export-to-json.schema.js.map