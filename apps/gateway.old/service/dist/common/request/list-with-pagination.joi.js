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
exports.listWithStoryModeratorPaginationSchemaObject = exports.listWithStoryPaginationSchemaObject = exports.listWithPaginationSchemaObject = void 0;
const Joi = __importStar(require("joi"));
const types_1 = require("../types");
const default_1 = require("../../config/default");
exports.listWithPaginationSchemaObject = {
    order: Joi.string()
        .valid(...Object.values(types_1.OrderEnum))
        .insensitive(),
    limit: Joi.number().max(default_1.staticConfig.pagination.maxLimit).required(),
    page: Joi.number(),
};
exports.listWithStoryPaginationSchemaObject = {
    order: Joi.string()
        .valid(...Object.values(types_1.StoryOrderEnum))
        .insensitive(),
    limit: Joi.number().max(default_1.staticConfig.pagination.maxLimit).required(),
    page: Joi.number(),
};
exports.listWithStoryModeratorPaginationSchemaObject = {
    order: Joi.string()
        .valid(...Object.values(types_1.StoryModeratorOrderEnum))
        .insensitive(),
    limit: Joi.number().max(default_1.staticConfig.pagination.maxLimit).required(),
    page: Joi.number(),
};
//# sourceMappingURL=list-with-pagination.joi.js.map