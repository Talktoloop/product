import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddPolishToSupportedLanguages1647253054091 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
