"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsCerbos = exports.PERMISSION_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.PERMISSION_KEY = 'permissions';
const PermissionsCerbos = (action, resource) => (0, common_1.SetMetadata)(exports.PERMISSION_KEY, { action, resource });
exports.PermissionsCerbos = PermissionsCerbos;
//# sourceMappingURL=permission.decorator.js.map