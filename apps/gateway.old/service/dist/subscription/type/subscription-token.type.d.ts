import { SUBSCRIPTION_TYPE } from '../constant/subscription-type.constant';
export type SubscriptionToken = {
    exp: number;
    groupType: string;
    plan: SUBSCRIPTION_TYPE;
};
