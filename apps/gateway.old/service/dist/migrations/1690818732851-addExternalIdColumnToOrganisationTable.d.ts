import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addExternalIdColumnToOrganisationTable1690818732851 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
