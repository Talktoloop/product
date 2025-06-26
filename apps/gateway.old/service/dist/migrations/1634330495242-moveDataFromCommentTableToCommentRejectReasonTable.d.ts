import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class MoveDataFromCommentTableToCommentRejectReasonTable1634330495242 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
