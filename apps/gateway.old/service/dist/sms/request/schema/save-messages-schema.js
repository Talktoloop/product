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
exports.saveMessagesSchema = void 0;
const Joi = __importStar(require("joi"));
const custom_joi_1 = require("../../../common/request/custom.joi");
const shared_1 = require("@ourloop/shared");
exports.saveMessagesSchema = Joi.object({
    userPhoneNumber: Joi.string().max(20),
    loopPhoneNumber: Joi.string().max(20),
    moderatorId: Joi.string(),
    storyId: Joi.string(),
    messages: Joi.array().items({
        type: Joi.string().valid(...Object.values(shared_1.MESSAGE_TYPE_CONSTANT)),
        content: Joi.string().custom(custom_joi_1.stripHtmlTags).max(65535),
        timestamp: Joi.string(),
        sender: Joi.string().valid(...Object.values(shared_1.SENDER_TYPE_CONSTANT)),
        provider: Joi.string(),
    }),
}).options({ allowUnknown: true, presence: 'required' });
//# sourceMappingURL=save-messages-schema.js.map