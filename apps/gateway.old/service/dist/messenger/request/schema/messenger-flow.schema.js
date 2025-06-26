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
exports.messengerFlowDtoSChema = void 0;
const Joi = __importStar(require("joi"));
exports.messengerFlowDtoSChema = Joi.object({
    storyUuid: Joi.string().trim(),
    flowStartedAt: Joi.date(),
    senderId: Joi.string(),
    pageId: Joi.string(),
    lang: Joi.string().trim().max(3),
    additionalInfo: Joi.string().trim().max(65535).invalid('').allow(null),
    storyType: Joi.string().optional().allow(null),
    shareUserInfo: Joi.boolean(),
    holdOnSendMessage: Joi.boolean().optional(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    gender: Joi.string().optional(),
    flowResponses: Joi.array().items({
        type: Joi.number(),
        content: Joi.string(),
        createdAt: Joi.date(),
        isStory: Joi.boolean(),
    }),
}).options({ allowUnknown: true, presence: 'required' });
//# sourceMappingURL=messenger-flow.schema.js.map