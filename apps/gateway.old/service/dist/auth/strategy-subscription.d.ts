import { JwtFromRequestFunction } from 'passport-jwt';
import { SubscriptionService } from '../subscription/service/subscription.service';
import { UserService } from '../user/service/user.service';
export declare class StrategySubscription {
    private readonly userService;
    name: string;
    private fail;
    private pass;
    private auth;
    private subscription;
    private readonly jwtFromRequest;
    private readonly logger;
    constructor(options: {
        jwtFromRequest: JwtFromRequestFunction;
        subscription: SubscriptionService;
    }, userService: UserService);
    authenticate(request: Request): Promise<void>;
}
