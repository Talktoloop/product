import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUniqueIndexToStoryTranslationId1668428768981 implements MigrationInterface {
    private tableName;
    private indexName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
