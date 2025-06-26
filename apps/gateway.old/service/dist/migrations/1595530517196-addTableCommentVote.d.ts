import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableCommentVote1595530517196 implements MigrationInterface {
    private tableName;
    private indexCommentName;
    private fkCommentName;
    private indexHash;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
