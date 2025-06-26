import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveUserDataFromConversationTableToStoryTable1676552849269 implements MigrationInterface {
    table: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
