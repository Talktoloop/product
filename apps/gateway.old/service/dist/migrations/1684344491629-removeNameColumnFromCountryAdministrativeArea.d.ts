import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class RemoveNameColumnFromCountryAdministrativeArea1684344491629 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
