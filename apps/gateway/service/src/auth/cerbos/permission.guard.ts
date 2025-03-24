import { CanActivate, ExecutionContext, Injectable, } from '@nestjs/common';
import { CerbosService } from '../../common/cerbos/cerbos.service'; // Ensure correct path
import { PERMISSION_KEY } from './permission.decorator'; // Import the decorator
import { Reflector } from '@nestjs/core';
import { ROLE } from '../../user/constant/role.constant';

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly cerbosService: CerbosService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        console.log('🔥 PermissionGuard Triggered');

        const request = context.switchToHttp().getRequest();
        const user = request.user; // Ensure user is attached by authentication middleware
        console.log('🧑 User:', user);

        if (!user) {
            console.log('🚫 No user found in request');
            return false; // No user = No access
        }

        // Retrieve permissions from the decorator
        const permissions = this.reflector.get<{ action: string; resource: string }>(
            PERMISSION_KEY,
            context.getHandler(),
        );
        console.log('🔍 Permissions from decorator:', permissions);

        if (!permissions) {
            console.log('⚠️ No permissions set for this route');
            return false;
        }
        //TODO fix this part
        const roleMap = {
            [ROLE.USER]: 'USER',
            [ROLE.MODERATOR]: 'MODERATOR',
            [ROLE.CASE_MANAGER]: 'CASE_MANAGER',
            [ROLE.SUPER_ADMIN]: 'SUPER_ADMIN',
        };
        const roleName = roleMap[user.role]
        if (!roleName) {
            console.log('🚫 No role found in user')
            return false
        };
        const { action, resource } = permissions;

        const principal = {
            id: user.id,
            roles: [roleName],
        };

        console.log(`🔑 Checking Cerbos: ${action} on ${resource} for`, principal);

        const resourceObj = { kind: resource, id: 'global' }; // Modify as needed

        const isAllowed = await this.cerbosService.checkPermission(principal, resourceObj, action);

        console.log('✅ Access Result:', isAllowed);
        return isAllowed;
    }
}