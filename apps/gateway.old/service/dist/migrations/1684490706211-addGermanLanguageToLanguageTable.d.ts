import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddGermanLanguageToLanguageTable1684490706211 implements MigrationInterface {
    tableName: string;
    languageCode: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
