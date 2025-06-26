import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIsRecoverableColumnToStoryTranslationHistoryTable1669628076737 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
