import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addAccessColumnToSubscriptionApplicationTable1692361561796 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
