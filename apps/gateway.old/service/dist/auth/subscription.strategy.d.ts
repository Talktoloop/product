import { StrategySubscription } from './strategy-subscription';
import { SubscriptionService } from '../subscription/service/subscription.service';
declare const SubscriptionStrategy_base: new (...args: any[]) => StrategySubscription;
export declare class SubscriptionStrategy extends SubscriptionStrategy_base {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
}
export {};
