import { CommentEntity } from './comment.entity';
export declare class CommentRecipientEntity {
    id: number;
    email: string;
    phone: string;
    nickname: string;
    createdAt: Date;
    updatedAt: Date;
    comment: CommentEntity;
}
