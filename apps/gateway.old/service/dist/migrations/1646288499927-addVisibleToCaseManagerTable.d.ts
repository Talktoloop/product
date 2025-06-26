import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddVisibleToCaseManagerTable1646288499927 implements MigrationInterface {
    tableName: string;
    newColumn: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
