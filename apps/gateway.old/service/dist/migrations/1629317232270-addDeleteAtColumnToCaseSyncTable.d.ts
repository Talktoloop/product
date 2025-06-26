import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addDeleteAtColumnToCaseSyncTable1629317232270 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
