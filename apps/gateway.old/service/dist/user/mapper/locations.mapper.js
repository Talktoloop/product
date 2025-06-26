"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const locations_ro_1 = require("../response/locations.ro");
const locationsMapper = (locations) => {
    if (!locations) {
        return [];
    }
    return locations.map((item) => {
        var _a;
        return (0, class_transformer_1.plainToClass)(locations_ro_1.LocationRO, Object.assign(Object.assign({}, item), { description: (_a = item.description) !== null && _a !== void 0 ? _a : item.formatted_address }));
    });
};
exports.locationsMapper = locationsMapper;
//# sourceMappingURL=locations.mapper.js.map