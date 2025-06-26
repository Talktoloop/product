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
exports.filterSchema = exports.filterConditions = exports.channelValidation = exports.countryValidation = exports.stringOrNumberValidation = void 0;
const Joi = __importStar(require("joi"));
const channel_constant_1 = require("../../constant/channel.constant");
const custom_joi_1 = require("../../../common/request/custom.joi");
exports.stringOrNumberValidation = Joi.alternatives().try(Joi.string().max(300), Joi.number().max(1000));
exports.countryValidation = Joi.alternatives().try(Joi.string().trim().min(3).allow('').optional(), Joi.string());
exports.channelValidation = Joi.alternatives().try(Joi.string().trim().min(3).allow(channel_constant_1.CHANNEL_CONSTANTS).optional(), Joi.string());
exports.filterConditions = {
    country: exports.countryValidation,
    type: exports.stringOrNumberValidation,
    regionId: Joi.string().custom(custom_joi_1.filterNumericIds),
    age: exports.stringOrNumberValidation,
    gender: exports.stringOrNumberValidation,
    difficulty: exports.stringOrNumberValidation,
    minority: exports.stringOrNumberValidation,
    organisation: Joi.string().max(255),
    thematic: exports.stringOrNumberValidation,
    channel: exports.channelValidation,
    channelFilter: exports.channelValidation,
    from: Joi.string(),
    to: Joi.string(),
    repliedTo: exports.stringOrNumberValidation,
    storySearchText: exports.stringOrNumberValidation,
    searchTerm: exports.stringOrNumberValidation,
};
exports.filterSchema = Joi.object(exports.filterConditions).options({
    presence: 'optional',
});
//# sourceMappingURL=filter.schema.js.map