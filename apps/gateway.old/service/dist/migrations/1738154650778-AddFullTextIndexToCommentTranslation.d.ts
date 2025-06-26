import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddFullTextIndexToCommentTranslation1738154650778 implements MigrationInterface {
    private translationTableName;
    private columnToIndex;
    private indexName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
