import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTagalogToSupportedLanguages1618949999288 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
