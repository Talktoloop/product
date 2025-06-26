import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenameCommentTableToStoryCommentTable1677833203085 implements MigrationInterface {
    oldTableName: string;
    newTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
