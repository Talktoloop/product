import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryCategory1594203124394 implements MigrationInterface {
    private tableName;
    private indexCategoryName;
    private fkCategoryName;
    private indexStoryName;
    private fkStoryName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
