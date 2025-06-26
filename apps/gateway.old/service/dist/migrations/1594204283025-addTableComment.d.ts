import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableComment1594204283025 implements MigrationInterface {
    private tableName;
    private indexCommentName;
    private fkCommentName;
    private indexStoryName;
    private fkStorytName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
