import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryTranslationAndMigrateValues1611555251951 implements MigrationInterface {
    private translationTableName;
    private migratedTableName;
    private migrationColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
