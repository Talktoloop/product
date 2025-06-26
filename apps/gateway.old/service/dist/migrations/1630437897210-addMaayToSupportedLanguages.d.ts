import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMaayToSupportedLanguages1630437897210 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
