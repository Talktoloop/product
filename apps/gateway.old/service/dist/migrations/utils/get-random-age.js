"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../common/types");
const get_random_value_with_excluded_1 = __importDefault(require("./get-random-value-with-excluded"));
const getRandomAge = (excluded = []) => {
    return (0, get_random_value_with_excluded_1.default)(Object.values(types_1.AGE_VALUE).filter((value) => Number.isInteger(value) && !excluded.includes(value)));
};
exports.default = getRandomAge;
//# sourceMappingURL=get-random-age.js.map