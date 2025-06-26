import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addAdditionalColumnsToOrganisationTable1686036278893 implements MigrationInterface {
    tableName: string;
    columns: TableColumn[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
