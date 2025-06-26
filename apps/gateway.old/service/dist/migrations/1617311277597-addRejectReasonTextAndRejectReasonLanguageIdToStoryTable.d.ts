import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addRejectReasonTextAndRejectReasonLanguageIdToStoryTable1617311277597 implements MigrationInterface {
    private tableName;
    private foreignKeyName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
