import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddExternalIdToCountryAdministrativeArea1684301178832 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
