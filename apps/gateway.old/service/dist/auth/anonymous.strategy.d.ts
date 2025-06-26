import { StrategyAnonymous } from './strategy-anonymous';
import { UserService } from '../user/service/user.service';
import { AuthService } from './auth.service';
declare const AnonymousStrategy_base: new (...args: any[]) => StrategyAnonymous;
export declare class AnonymousStrategy extends AnonymousStrategy_base {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
}
export {};
