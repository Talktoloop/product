import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenameCommentTranslationTableToStoryCommentTranslationTable1682433613002 implements MigrationInterface {
    oldTableName: string;
    newTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
