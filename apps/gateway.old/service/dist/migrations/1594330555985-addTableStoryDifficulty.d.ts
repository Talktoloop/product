import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryDifficulty1594330555985 implements MigrationInterface {
    private tableName;
    private indexDifficultyName;
    private fkDifficultyName;
    private indexStoryName;
    private fkStoryName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
