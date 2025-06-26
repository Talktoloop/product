import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIndonesianToSupportedLanguage1630442747951 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
