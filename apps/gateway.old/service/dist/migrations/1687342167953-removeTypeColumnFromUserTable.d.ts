import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class RemoveTypeColumnFromUserTable1687342167953 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
