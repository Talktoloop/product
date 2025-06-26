import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddReferredToAssistanceColumnToCaseSyncTable1632378157938 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
