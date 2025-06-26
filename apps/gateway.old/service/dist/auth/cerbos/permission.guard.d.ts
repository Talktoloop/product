import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CerbosService } from '../../common/cerbos/cerbos.service';
import { Reflector } from '@nestjs/core';
export declare class PermissionGuard implements CanActivate {
    private readonly reflector;
    private readonly cerbosService;
    constructor(reflector: Reflector, cerbosService: CerbosService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
