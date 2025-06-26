import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCaseSyncThematicAreaSubsectionTable1631741227828 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    private column;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
