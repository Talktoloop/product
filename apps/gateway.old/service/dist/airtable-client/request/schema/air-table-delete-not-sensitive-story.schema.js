"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.airTableDeleteNotSensitiveSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.airTableDeleteNotSensitiveSchema = joi_1.default.object({
    recordId: joi_1.default.string().trim().max(100),
    loopId: joi_1.default.string().trim().max(100),
    notSensitive: joi_1.default.boolean(),
});
//# sourceMappingURL=air-table-delete-not-sensitive-story.schema.js.map