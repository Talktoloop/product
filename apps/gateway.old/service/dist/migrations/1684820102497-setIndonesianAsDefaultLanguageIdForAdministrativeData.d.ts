import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetIndonesianAsDefaultLanguageIdForAdministrativeData1684820102497 implements MigrationInterface {
    tableName: string;
    countryCode: string;
    newLanguageCode: string;
    oldLanguageCode: string;
    getLanguages(queryRunner: QueryRunner): Promise<any>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
