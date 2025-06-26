import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenameCommentRejectReasonTableToStoryCommentRejectReasonTable1682433668790 implements MigrationInterface {
    oldTableName: string;
    newTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
