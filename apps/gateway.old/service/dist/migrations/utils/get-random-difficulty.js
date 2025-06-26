"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_random_value_with_excluded_1 = __importDefault(require("./get-random-value-with-excluded"));
const getRandomDifficulty = (difficulties, excluded = []) => {
    return (0, get_random_value_with_excluded_1.default)(difficulties.filter((item) => !excluded.includes(item.id)));
};
exports.default = getRandomDifficulty;
//# sourceMappingURL=get-random-difficulty.js.map