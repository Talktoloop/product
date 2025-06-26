import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddNyanjaToLanguageTable1614588020372 implements MigrationInterface {
    private tableName;
    private languageCode;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
