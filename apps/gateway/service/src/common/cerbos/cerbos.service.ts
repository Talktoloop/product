import { Injectable } from '@nestjs/common';
import { HTTP } from "@cerbos/http";
import { ROLE } from '../../user/constant/role.constant';

@Injectable()
export class CerbosService {
    private readonly cerbos: HTTP;

    constructor() {
        this.cerbos = new HTTP(process.env.CERBOS_API || 'http://localhost:3592'); // Use the Cerbos HTTP API
    }

    async checkPermission(principal: { id: string, roles: string[] }, resource: { kind: string, id: string }, action: string,): Promise<boolean> {
        try {
            const result = await this.cerbos.checkResource({
                principal,
                resource,
                actions: [action],
            });

            return result.isAllowed(action);
        } catch (error) {
            console.error('Error checking Cerbos permissions:', error);
            return false;
        }
    }

    async checkPermissionWithToken(principal: { id: string, role: number }, resource: { kind: string, id: string, attr: { token: string } }, action: string): Promise<boolean> {
        try {
            const roleMap = {
                [ROLE.USER]: 'USER',
                [ROLE.MODERATOR]: 'MODERATOR',
                [ROLE.CASE_MANAGER]: 'CASE_MANAGER',
                [ROLE.SUPER_ADMIN]: 'SUPER_ADMIN',
            };
            const roleName = roleMap[principal.role[0]];
            if (!roleName) {
                console.log('🚫 No role found in user')
                return false
            };
            const result = await this.cerbos.checkResource({
                principal: { id: principal.id, roles: [roleName] },
                resource,
                actions: [action],
            });

            return result.isAllowed(action);
        } catch (error) {
            console.error('Error checking Cerbos permissions:', error);
            return false;
        }
    }

}