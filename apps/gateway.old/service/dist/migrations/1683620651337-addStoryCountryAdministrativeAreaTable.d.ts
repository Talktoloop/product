import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddStoryCountryAdministrativeAreaTable1683620651337 implements MigrationInterface {
    tableName: string;
    foreignKeyStoryId: string;
    indexStoryId: string;
    foreignKeyAdministrativeAreaId: string;
    indexAdministrativeAreaId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
