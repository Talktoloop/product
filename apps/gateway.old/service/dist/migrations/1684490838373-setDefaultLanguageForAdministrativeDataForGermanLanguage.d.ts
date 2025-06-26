import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetDefaultLanguageForAdministrativeDataForGermanLanguage1684490838373 implements MigrationInterface {
    tableName: string;
    countryCode: string;
    languageCode: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
