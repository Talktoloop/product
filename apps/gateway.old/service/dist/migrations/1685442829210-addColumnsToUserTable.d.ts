import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddColumnsToUserTable1685442829210 implements MigrationInterface {
    tableName: string;
    columns: TableColumn[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
