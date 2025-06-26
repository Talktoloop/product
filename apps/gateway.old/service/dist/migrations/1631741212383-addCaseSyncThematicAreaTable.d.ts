import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCaseSyncThematicAreaTable1631741212383 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    private column;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
