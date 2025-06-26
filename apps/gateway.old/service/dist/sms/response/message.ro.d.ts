import { SenderRO } from './sender.ro';
export declare class MessageRO {
    id: number;
    storyId: string;
    content: string;
    isPinned: boolean;
    sender: SenderRO;
    createdAt: Date;
}
