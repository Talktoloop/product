import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableStoryView1594796115746 implements MigrationInterface {
    private tableName;
    private indexStoryName;
    private fkStoryName;
    private indexHash;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
