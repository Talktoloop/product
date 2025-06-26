"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomValueWithExcluded = (values = []) => {
    if (values.length === 0) {
        return;
    }
    return values[Math.floor(Math.random() * (values.length - 1))];
};
exports.default = getRandomValueWithExcluded;
//# sourceMappingURL=get-random-value-with-excluded.js.map