import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTypeToCommentTranslationTable1616761597764 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
