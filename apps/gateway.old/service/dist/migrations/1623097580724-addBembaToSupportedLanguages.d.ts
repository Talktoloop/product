import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addBembaToSupportedLanguages1623097580724 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
