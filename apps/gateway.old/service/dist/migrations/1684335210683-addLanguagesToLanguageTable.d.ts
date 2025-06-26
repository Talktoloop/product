import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddLanguagesToLanguageTable1684335210683 implements MigrationInterface {
    tableName: string;
    languageCodes: string[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
