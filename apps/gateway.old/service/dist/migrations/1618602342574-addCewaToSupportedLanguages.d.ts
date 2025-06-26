import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCewaToSupportedLanguages1618602342574 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
