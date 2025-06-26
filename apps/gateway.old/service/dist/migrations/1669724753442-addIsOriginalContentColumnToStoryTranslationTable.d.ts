import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIsOriginalContentColumnToStoryTranslationTable1669724753442 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
