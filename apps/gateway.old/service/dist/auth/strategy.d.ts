import { UserEntity } from '../user/entity/user.entity';
import { JwtFromRequestFunction } from 'passport-jwt';
import { AuthService } from './auth.service';
export declare class Strategy {
    name: string;
    private fail;
    private readonly jwtFromRequest;
    private readonly verify;
    private success;
    private auth;
    private readonly logger;
    constructor(options: {
        jwtFromRequest: JwtFromRequestFunction;
        auth: AuthService;
    }, verify: (request: any, token: any) => UserEntity);
    authenticate(request: Request): Promise<UserEntity>;
}
