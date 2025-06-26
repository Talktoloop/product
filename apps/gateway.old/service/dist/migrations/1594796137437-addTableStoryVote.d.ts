import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryVote1594796137437 implements MigrationInterface {
    private tableName;
    private indexStoryName;
    private fkStoryName;
    private indexHash;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
