import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryThematic1594665915409 implements MigrationInterface {
    private tableName;
    private indexThematicName;
    private fkThematicName;
    private indexStoryName;
    private fkStoryName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
