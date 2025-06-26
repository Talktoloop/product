import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class MoveDataFromStoryTableToStoryRejectReasonTable1634328720550 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
