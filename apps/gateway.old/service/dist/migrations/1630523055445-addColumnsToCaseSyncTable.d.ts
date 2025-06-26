import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnsToCaseSyncTable1630523055445 implements MigrationInterface {
    private tableName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
