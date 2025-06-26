import { SUBSCRIPTION_TYPE } from '../../constant/subscription-type.constant';
export declare class GenerateTokenDTO {
    userId?: string;
    organisationId?: string;
    tokenValidityInDays: number;
    subscriptionType: SUBSCRIPTION_TYPE;
}
