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
exports.addStorySchema = void 0;
const Joi = __importStar(require("joi"));
const types_1 = require("../../../common/types");
const custom_joi_1 = require("../../../common/request/custom.joi");
const helpers_1 = require("../../../common/helpers");
const content_schema_1 = require("../../../common/request/schema/content.schema");
exports.addStorySchema = Joi.object({
    title: Joi.string().trim().max(100).allow('').custom(custom_joi_1.stripHtmlTags),
    phone: Joi.string()
        .trim()
        .allow(null)
        .custom(custom_joi_1.clearPhoneNumber)
        .min(8)
        .max(20)
        .regex(/^\+[0-9]+$/),
    content: content_schema_1.contentSchema.content,
    place: Joi.string().trim().max(100).allow('').custom(custom_joi_1.stripHtmlTags),
    gender: Joi.number().valid(...Object.values(types_1.GENDER_VALUE)),
    difficulty: Joi.number()
        .allow(null)
        .valid(...(0, helpers_1.getKeysWithLowerCase)(types_1.DIFFICULTY_VALUE)),
    email: Joi.string().allow(null).email().max(100).custom(custom_joi_1.stripHtmlTags),
    age: Joi.number().valid(...Object.values(types_1.AGE_VALUE)),
    authorNickname: Joi.string().trim().max(100).allow('').custom(custom_joi_1.stripHtmlTags),
    country: Joi.string().trim().max(2),
    organisations: Joi.array().items(Joi.string().guid(), Joi.string().max(100)),
    difficulties: Joi.array().items(Joi.number().max(1000)),
    categories: Joi.array().items(Joi.number().max(1000)),
    maternityStatus: Joi.array().items(Joi.number().max(1000)),
    isSensitive: Joi.boolean(),
    regionId: Joi.number().allow(null),
    countryId: Joi.number(),
}).options({ presence: 'optional' });
//# sourceMappingURL=add-story-schema.js.map