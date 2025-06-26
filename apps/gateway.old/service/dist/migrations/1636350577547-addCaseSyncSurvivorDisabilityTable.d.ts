import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCaseSyncSurvivorDisabilityTable1636350577547 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    private column;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
