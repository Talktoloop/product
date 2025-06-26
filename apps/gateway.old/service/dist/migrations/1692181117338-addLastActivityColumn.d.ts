import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addLastActivityColumn1692181117338 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
