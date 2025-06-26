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
exports.paginationWithFilterSchema = void 0;
const Joi = __importStar(require("joi"));
const list_with_pagination_joi_1 = require("../../../common/request/list-with-pagination.joi");
const filter_schema_1 = require("./filter.schema");
const custom_joi_1 = require("../../../common/request/custom.joi");
exports.paginationWithFilterSchema = Joi.object(Object.assign({ limit: list_with_pagination_joi_1.listWithPaginationSchemaObject.limit.required(), page: list_with_pagination_joi_1.listWithPaginationSchemaObject.page.required() }, filter_schema_1.filterConditions))
    .custom(custom_joi_1.customDatePeriodValidation)
    .options({ presence: 'optional' });
//# sourceMappingURL=pagination-with-filter.schema.js.map