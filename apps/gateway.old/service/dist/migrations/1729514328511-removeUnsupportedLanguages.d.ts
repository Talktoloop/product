import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveUnsupportedLanguages1729514328511 implements MigrationInterface {
    private readonly supportedLanguagesCode;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
