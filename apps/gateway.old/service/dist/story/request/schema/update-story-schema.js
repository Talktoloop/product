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
exports.updateStorySchema = void 0;
const Joi = __importStar(require("joi"));
const types_1 = require("../../../common/types");
const language_schema_1 = require("../../../common/request/schema/language.schema");
const helpers_1 = require("../../../common/helpers");
const content_schema_1 = require("../../../common/request/schema/content.schema");
exports.updateStorySchema = Joi.object({
    gender: Joi.number().valid(...Object.values(types_1.GENDER_VALUE)),
    age: Joi.number().valid(...Object.values(types_1.AGE_VALUE)),
    place: Joi.string().max(100),
    authorNickname: Joi.string().max(255).allow(null, ''),
    isSensitive: Joi.boolean(),
    content: content_schema_1.contentSchema.content.optional(),
    difficulty: Joi.number()
        .allow(null)
        .valid(...(0, helpers_1.getKeysWithLowerCase)(types_1.DIFFICULTY_VALUE)),
    organisations: [
        Joi.array()
            .optional()
            .items(Joi.string().guid().optional(), Joi.string().max(100).optional()),
        null,
    ],
    difficulties: [
        Joi.array().optional().items(Joi.number().optional().max(1000)),
        null,
    ],
    categories: [
        Joi.array().optional().items(Joi.number().optional().max(1000)),
        null,
    ],
    maternityStatus: [
        Joi.array().optional().items(Joi.number().optional().max(1000)),
        null,
    ],
    thematics: [
        Joi.array().optional().items(Joi.number().optional().max(1000)),
        null,
    ],
    language: language_schema_1.languageSchema.language.optional(),
    translations: [
        Joi.array().optional().items({
            code: Joi.string().required(),
            content: content_schema_1.contentSchema.content,
        }),
    ],
    pinnedMessageIds: [
        Joi.array().optional().items(Joi.number().optional()),
        null,
    ],
    countryId: Joi.number().required(),
    regionId: Joi.number().allow(null).optional(),
    isUrgent: Joi.boolean().allow(null).optional(),
    isMinority: Joi.boolean().allow(null).optional(),
});
//# sourceMappingURL=update-story-schema.js.map