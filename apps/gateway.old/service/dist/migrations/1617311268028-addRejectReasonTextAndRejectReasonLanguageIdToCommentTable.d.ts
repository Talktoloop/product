import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRejectReasonTextAndRejectReasonLanguageIdToCommentTable1617311268028 implements MigrationInterface {
    private tableName;
    private foreignKeyName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
