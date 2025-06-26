"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_random_value_with_excluded_1 = __importDefault(require("./get-random-value-with-excluded"));
const getRandomThematic = (thematics, excluded = []) => {
    return (0, get_random_value_with_excluded_1.default)(thematics.filter((element) => !excluded
        .map((item) => item.parentThematicId)
        .includes(element.parentThematicId)));
};
exports.default = getRandomThematic;
//# sourceMappingURL=get-random-thematic-area.js.map