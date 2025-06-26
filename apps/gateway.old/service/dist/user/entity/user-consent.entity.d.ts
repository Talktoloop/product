import { CommentEntity } from '../../comment/entity/comment.entity';
import { MessageEntity } from '../../sms/entity/message.entity';
export declare class UserConsentEntity {
    id: number;
    document: string;
    createdAt: Date;
    comments?: CommentEntity[];
    messages?: MessageEntity[];
}
