import { SuccessRO } from '../../common/response/success.ro';
import { NotificationService } from '../service/notification.service';
import { SendMessageToSupportDto } from '../request/dto/send-message-to-support.dto';
export declare class NotificationController {
    private readonly notificationService;
    private readonly logger;
    constructor(notificationService: NotificationService);
    sendMessageToSupportTeam(data: SendMessageToSupportDto): Promise<SuccessRO | void>;
}
