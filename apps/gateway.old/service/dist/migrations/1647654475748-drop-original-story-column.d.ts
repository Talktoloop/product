import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class dropOriginalStoryColumn1647654475748 implements MigrationInterface {
    name: string;
    conversationTableName: string;
    messengerConversationTableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
