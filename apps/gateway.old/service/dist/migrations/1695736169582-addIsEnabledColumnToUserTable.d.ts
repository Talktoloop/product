import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddIsEnabledColumnToUserTable1695736169582 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
