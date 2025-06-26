import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class isPinnedField1646486166287 implements MigrationInterface {
    name: string;
    messangerTableName: string;
    smsTableName: string;
    conversationTableName: string;
    isPinnedColumn: TableColumn;
    originalStoryConversationColumn: TableColumn;
    nullableOriginalStoryConversationColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
