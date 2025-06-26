import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddCreatedAtToUserAndOrganisationTokenTable1705057787273 implements MigrationInterface {
    tableName1: string;
    tableName2: string;
    column: TableColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
