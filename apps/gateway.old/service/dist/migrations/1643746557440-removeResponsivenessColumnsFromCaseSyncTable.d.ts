import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveResponsivenessColumnsFromCaseSyncTable1643746557440 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
