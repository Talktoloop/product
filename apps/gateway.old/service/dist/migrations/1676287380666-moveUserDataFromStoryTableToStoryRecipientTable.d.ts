import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveUserDataFromStoryTableToStoryRecipientTable1676287380666 implements MigrationInterface {
    table: string;
    columns: TableColumn[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
