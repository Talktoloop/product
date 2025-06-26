"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignStoriesSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.assignStoriesSchema = joi_1.default.object({
    storyIds: joi_1.default.array().items(joi_1.default.string()),
});
//# sourceMappingURL=assign-stories-schema.js.map