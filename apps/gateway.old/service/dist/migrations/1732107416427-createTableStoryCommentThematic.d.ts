import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTableStoryCommentThematic1732107416427 implements MigrationInterface {
    private tableName;
    private indexThematicName;
    private fkThematicName;
    private indexStoryCommentName;
    private fkStoryCommentName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
