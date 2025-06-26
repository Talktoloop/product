import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCountryAdministrativeAreaNameTable1684243291213 implements MigrationInterface {
    tableName: string;
    foreignKeyAdministrativeAreaId: string;
    indexAdministrativeAreaId: string;
    foreignKeyLanguageId: string;
    indexLanguageId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
