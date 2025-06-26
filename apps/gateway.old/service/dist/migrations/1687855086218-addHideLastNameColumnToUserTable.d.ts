import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddHideLastNameColumnToUserTable1687855086218 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
