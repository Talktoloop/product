import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateCommentStatusType1648670170392 implements MigrationInterface {
    private tableName;
    private columnName;
    private oldCommentData;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
