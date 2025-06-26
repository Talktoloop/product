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
exports.rejectStoriesSchema = exports.rejectContentSchema = void 0;
const Joi = __importStar(require("joi"));
const custom_joi_1 = require("../../../common/request/custom.joi");
exports.rejectContentSchema = Joi.object({
    reasonIds: Joi.array().items(Joi.number().optional().max(10000)),
    reasonTexts: Joi.array()
        .items(Joi.string().optional().max(65535))
        .min(Joi.ref('reasonIds', {
        adjust: (value) => {
            return value ? value.length : 0;
        },
    }))
        .max(Joi.ref('reasonIds', {
        adjust: (value) => {
            return value ? value.length + 1 : 0;
        },
    })),
    notificationLanguage: Joi.string().min(2).max(3),
    rationale: Joi.string()
        .trim()
        .max(65535)
        .allow('')
        .optional()
        .custom(custom_joi_1.stripHtmlTags),
});
exports.rejectStoriesSchema = Joi.object({
    storiesToReject: Joi.array()
        .items(Joi.object()
        .keys({
        storyId: Joi.string().trim().custom(custom_joi_1.stripHtmlTags).uuid(),
    })
        .concat(exports.rejectContentSchema))
        .min(1)
        .required(),
});
//# sourceMappingURL=reject-content.schema.js.map