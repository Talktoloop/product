import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddDefaultLanguageIdToCountryTable1684318149723 implements MigrationInterface {
    tableName: string;
    column: TableColumn;
    foreignKeyLanguageId: string;
    indexLanguageId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
