import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddStoryRejectReasonTable1634327735664 implements MigrationInterface {
    private tableName;
    private foreignKeyStoryId;
    private foreignKeyRejectReasonId;
    private rejectReasonIdIndex;
    private storyIdIndex;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
