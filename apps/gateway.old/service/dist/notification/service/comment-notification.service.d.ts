import { CommentEntity } from '../../comment/entity/comment.entity';
import { NotificationService } from './notification.service';
import { RejectContentDto } from '../../common/dto/reject-content.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { LibraryResponse } from 'node-mailjet';
import { MessageService } from '../../sms/service/message.service';
export declare class CommentNotificationService {
    private readonly notificationService;
    private readonly clientProxy;
    private readonly config;
    private readonly messageService;
    private readonly logger;
    constructor(notificationService: NotificationService, clientProxy: ClientProxy, config: ConfigService, messageService: MessageService);
    sendNotificationsToStoryOwnerAfterCommentPublication(comment: CommentEntity): Promise<LibraryResponse<any>>;
    sendNotificationsAfterCommentPublication(comment: CommentEntity): Promise<void>;
    sendNotificationsAfterRejectingComment(comment: CommentEntity, rejectContent: RejectContentDto): Promise<void>;
}
