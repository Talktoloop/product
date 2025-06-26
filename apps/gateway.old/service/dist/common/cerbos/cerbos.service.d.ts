export declare class CerbosService {
    private readonly cerbos;
    constructor();
    checkPermission(principal: {
        id: string;
        roles: string[];
    }, resource: {
        kind: string;
        id: string;
    }, action: string): Promise<boolean>;
    checkPermissionWithToken(principal: {
        id: string;
        role: number;
    }, resource: {
        kind: string;
        id: string;
        attr: {
            token: string;
        };
    }, action: string): Promise<boolean>;
}
