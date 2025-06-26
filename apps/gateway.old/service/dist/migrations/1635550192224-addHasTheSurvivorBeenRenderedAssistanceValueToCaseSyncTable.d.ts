import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addHasTheSurvivorBeenRenderedAssistanceValueToCaseSyncTable1635550192224 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
