"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_random_value_with_excluded_1 = __importDefault(require("./get-random-value-with-excluded"));
const getRandomCategory = (categories, excluded = []) => {
    return (0, get_random_value_with_excluded_1.default)(categories.filter((item) => !excluded.includes(item.id)));
};
exports.default = getRandomCategory;
//# sourceMappingURL=get-random-category.js.map