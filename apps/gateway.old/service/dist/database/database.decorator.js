"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENTITY_REPOSITORY = void 0;
exports.EntityRepository = EntityRepository;
const common_1 = require("@nestjs/common");
exports.ENTITY_REPOSITORY = 'ENTITY_REPOSITORY';
function EntityRepository(entity) {
    return (0, common_1.SetMetadata)(exports.ENTITY_REPOSITORY, entity);
}
//# sourceMappingURL=database.decorator.js.map