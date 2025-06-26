import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUkraineToSupportedLanguages1647027601517 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
