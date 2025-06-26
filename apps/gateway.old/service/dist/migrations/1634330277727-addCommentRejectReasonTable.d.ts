import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCommentRejectReasonTable1634330277727 implements MigrationInterface {
    private tableName;
    private foreignKeyCommentId;
    private foreignKeyRejectReasonId;
    private rejectReasonIdIndex;
    private commentIdIndex;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
