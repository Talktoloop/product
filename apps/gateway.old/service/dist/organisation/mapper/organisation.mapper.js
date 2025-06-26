"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organisationsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const organisation_ro_1 = require("../response/organisation.ro");
const organisationsMapper = (organisations) => {
    return organisations.map((organisation) => (0, class_transformer_1.plainToClass)(organisation_ro_1.OrganisationRO, organisation));
};
exports.organisationsMapper = organisationsMapper;
//# sourceMappingURL=organisation.mapper.js.map