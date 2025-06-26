import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableCommentTranslationAndMigrateValues1611748162224 implements MigrationInterface {
    private translationTableName;
    private migratedTableName;
    private migrationColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
