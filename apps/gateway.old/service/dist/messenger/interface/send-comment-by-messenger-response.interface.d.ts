export interface sendCommentNotificationToMessenger {
    messages: Messages;
}
interface Messages {
    content: string;
    createdAt: Date;
    isStory: boolean;
    type: number;
}
export {};
