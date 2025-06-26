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
exports.timelineForCasesSchema = void 0;
const Joi = __importStar(require("joi"));
const filter_schema_1 = require("./filter.schema");
const date_fns_1 = require("date-fns");
exports.timelineForCasesSchema = Joi.object(Object.assign(Object.assign({}, filter_schema_1.filterConditions), { from: Joi.date().iso().required(), to: Joi.date()
        .iso()
        .min(Joi.ref('from', {
        adjust: (value) => {
            return new Date(value);
        },
    }))
        .max(Joi.ref('from', {
        adjust: (value) => {
            return (0, date_fns_1.addMonths)(new Date(value), 11);
        },
    }))
        .required() })).options({
    presence: 'optional',
});
//# sourceMappingURL=timeline-for-cases.schema.js.map