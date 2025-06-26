import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveGermanFromLanguageTable1614588641003 implements MigrationInterface {
    private tableName;
    private languageCode;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
