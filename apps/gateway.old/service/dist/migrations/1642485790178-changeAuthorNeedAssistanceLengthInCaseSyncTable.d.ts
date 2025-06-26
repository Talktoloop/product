import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeAuthorNeedAssistanceLengthInCaseSyncTable1642485790178 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
