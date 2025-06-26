import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddProcessAndReferAndInvestigationResultColumnsToCaseSyncTable1631568248762 implements MigrationInterface {
    private tableName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
