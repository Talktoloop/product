import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableLanguageWithDefaultValue1611554285956 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
