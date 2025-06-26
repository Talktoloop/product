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
exports.PermissionGuard = void 0;
const common_1 = require("@nestjs/common");
const cerbos_service_1 = require("../../common/cerbos/cerbos.service");
const permission_decorator_1 = require("./permission.decorator");
const core_1 = require("@nestjs/core");
const role_constant_1 = require("../../user/constant/role.constant");
let PermissionGuard = class PermissionGuard {
    constructor(reflector, cerbosService) {
        this.reflector = reflector;
        this.cerbosService = cerbosService;
    }
    async canActivate(context) {
        console.log('🔥 PermissionGuard Triggered');
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log('🧑 User:', user);
        if (!user) {
            console.log('🚫 No user found in request');
            return false;
        }
        const permissions = this.reflector.get(permission_decorator_1.PERMISSION_KEY, context.getHandler());
        console.log('🔍 Permissions from decorator:', permissions);
        if (!permissions) {
            console.log('⚠️ No permissions set for this route');
            return false;
        }
        const roleMap = {
            [role_constant_1.ROLE.USER]: 'USER',
            [role_constant_1.ROLE.MODERATOR]: 'MODERATOR',
            [role_constant_1.ROLE.CASE_MANAGER]: 'CASE_MANAGER',
            [role_constant_1.ROLE.SUPER_ADMIN]: 'SUPER_ADMIN',
        };
        const roleName = roleMap[user.role];
        if (!roleName) {
            console.log('🚫 No role found in user');
            return false;
        }
        ;
        const { action, resource } = permissions;
        const principal = {
            id: user.id,
            roles: [roleName],
        };
        console.log(`🔑 Checking Cerbos: ${action} on ${resource} for`, principal);
        const resourceObj = { kind: resource, id: 'global' };
        const isAllowed = await this.cerbosService.checkPermission(principal, resourceObj, action);
        console.log('✅ Access Result:', isAllowed);
        return isAllowed;
    }
};
exports.PermissionGuard = PermissionGuard;
exports.PermissionGuard = PermissionGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        cerbos_service_1.CerbosService])
], PermissionGuard);
//# sourceMappingURL=permission.guard.js.map