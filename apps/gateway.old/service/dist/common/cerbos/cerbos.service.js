"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CerbosService = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("@cerbos/http");
const role_constant_1 = require("../../user/constant/role.constant");
let CerbosService = class CerbosService {
    constructor() {
        this.cerbos = new http_1.HTTP(process.env.CERBOS_API || 'http://localhost:3592');
    }
    async checkPermission(principal, resource, action) {
        try {
            const result = await this.cerbos.checkResource({
                principal,
                resource,
                actions: [action],
            });
            return result.isAllowed(action);
        }
        catch (error) {
            console.error('Error checking Cerbos permissions:', error);
            return false;
        }
    }
    async checkPermissionWithToken(principal, resource, action) {
        try {
            const roleMap = {
                [role_constant_1.ROLE.USER]: 'USER',
                [role_constant_1.ROLE.MODERATOR]: 'MODERATOR',
                [role_constant_1.ROLE.CASE_MANAGER]: 'CASE_MANAGER',
                [role_constant_1.ROLE.SUPER_ADMIN]: 'SUPER_ADMIN',
            };
            const roleName = roleMap[principal.role[0]];
            if (!roleName) {
                console.log('🚫 No role found in user');
                return false;
            }
            ;
            const result = await this.cerbos.checkResource({
                principal: { id: principal.id, roles: [roleName] },
                resource,
                actions: [action],
            });
            return result.isAllowed(action);
        }
        catch (error) {
            console.error('Error checking Cerbos permissions:', error);
            return false;
        }
    }
};
exports.CerbosService = CerbosService;
exports.CerbosService = CerbosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CerbosService);
//# sourceMappingURL=cerbos.service.js.map