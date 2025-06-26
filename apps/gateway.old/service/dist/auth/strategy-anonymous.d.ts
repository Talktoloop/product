import { JwtFromRequestFunction } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UserService } from '../user/service/user.service';
export declare class StrategyAnonymous {
    name: string;
    private pass;
    private fail;
    private auth;
    private user;
    private readonly jwtFromRequest;
    constructor(options: {
        jwtFromRequest: JwtFromRequestFunction;
        auth: AuthService;
        user: UserService;
    });
    authenticate(request: Request): Promise<void>;
}
