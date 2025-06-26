"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countiesMapper = void 0;
const class_transformer_1 = require("class-transformer");
const country_ro_1 = require("../response/country.ro");
const countiesMapper = (countries) => countries.map((country) => (0, class_transformer_1.plainToClass)(country_ro_1.CountryRO, Object.assign(Object.assign({}, country), { hasChild: country.numberOfAdministrativeDataConnections > 0 })));
exports.countiesMapper = countiesMapper;
//# sourceMappingURL=countries.mapper.js.map