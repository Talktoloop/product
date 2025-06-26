import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveUserDataFromIvrrConversationTableToStoryRecipientTable1676540038147 implements MigrationInterface {
    table: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
