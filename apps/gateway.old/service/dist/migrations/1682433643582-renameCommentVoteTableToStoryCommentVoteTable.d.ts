import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenameCommentVoteTableToStoryCommentVoteTable1682433643582 implements MigrationInterface {
    oldTableName: string;
    newTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
