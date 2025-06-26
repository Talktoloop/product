import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class dropUrlColumnIvrr1646669126528 implements MigrationInterface {
    name: string;
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
