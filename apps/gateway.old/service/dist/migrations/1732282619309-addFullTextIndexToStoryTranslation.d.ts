import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddFullTextIndexToStoryTranslation1732282619309 implements MigrationInterface {
    private translationTableName;
    private columnToIndex;
    private indexName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
