import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTablePregnantStory1594664897974 implements MigrationInterface {
    private tableName;
    private indexPregnancyStatusName;
    private fkPregnancyStatusName;
    private indexStoryName;
    private fkStoryName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
