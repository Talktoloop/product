import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddSupportedLanguagesData1611869973090 implements MigrationInterface {
    private supportedLanguages;
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
