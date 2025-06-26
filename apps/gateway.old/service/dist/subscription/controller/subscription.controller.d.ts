import { SubscriptionService } from '../service/subscription.service';
import { SuccessRO } from '../../common/response/success.ro';
import { SubscriptionAccessDTO } from '../request/dto/subscription-access.dto';
import { UserEntity } from '../../user/entity/user.entity';
import { SubscriptionTokenRO } from '../response/subscription-token.ro';
import { GenerateTokenDTO } from '../request/dto/generate-token.dto';
import { SendTokenDTO } from '../request/dto/send-token.dto';
import { UserService } from '../../user/service/user.service';
export declare class SubscriptionController {
    private readonly subscriptionService;
    private readonly userService;
    constructor(subscriptionService: SubscriptionService, userService: UserService);
    sendEmailWithSubscriptionRequest(user: UserEntity, params: SubscriptionAccessDTO): Promise<SuccessRO>;
    generateSubscriptionToken(data: GenerateTokenDTO): Promise<SubscriptionTokenRO>;
    sendSubscriptionToken(data: SendTokenDTO): Promise<SuccessRO>;
}
