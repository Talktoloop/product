import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class DisableGoogleTranslationProvider1619464649080 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
