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
exports.storyListSchema = void 0;
const Joi = __importStar(require("joi"));
const filter_schema_1 = require("../../../common/request/schema/filter.schema");
const list_with_pagination_joi_1 = require("../../../common/request/list-with-pagination.joi");
const custom_joi_1 = require("../../../common/request/custom.joi");
exports.storyListSchema = Joi.object(Object.assign(Object.assign({}, list_with_pagination_joi_1.listWithStoryPaginationSchemaObject), { country: Joi.alternatives().try(Joi.array().items(Joi.string().max(3)), Joi.string().max(30)), type: Joi.alternatives().try(Joi.number().max(2), Joi.string().max(20)), regionId: filter_schema_1.filterConditions.regionId, age: Joi.alternatives().try(Joi.number().max(10), Joi.string().max(20)), gender: Joi.alternatives().try(Joi.number().max(3), Joi.string().max(20)), difficulty: Joi.alternatives().try(Joi.number().max(100), Joi.string().max(100)), organisation: Joi.string().max(1000), q: Joi.string().max(255), thematic: Joi.alternatives().try(Joi.array().items(Joi.string().max(255)), Joi.string().max(255)), from: filter_schema_1.filterConditions.from, to: filter_schema_1.filterConditions.to, repliedTo: Joi.string().max(5), channelFilter: Joi.string().max(11), minority: Joi.number().max(2), searchTerm: Joi.string().min(0).max(255).custom(custom_joi_1.stripHtmlTags) })).options({ presence: 'optional' });
//# sourceMappingURL=story-list-schema.js.map