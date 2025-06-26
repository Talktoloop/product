import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveDataFromMessengerConversationTableToConversationTable1677745367976 implements MigrationInterface {
    table: string;
    column: TableColumn;
    foreignKeyMessageToMessengerConversation: string;
    foreignKeyMessageToConversation: string;
    foreignKeyStoryToMessengerConversation: string;
    foreignKeyConversationToStory: string;
    foreignKeyStoryToConversation: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
