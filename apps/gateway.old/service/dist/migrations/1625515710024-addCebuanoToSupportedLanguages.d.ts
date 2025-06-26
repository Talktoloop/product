import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCebuanoToSupportedLanguages1625515710024 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
