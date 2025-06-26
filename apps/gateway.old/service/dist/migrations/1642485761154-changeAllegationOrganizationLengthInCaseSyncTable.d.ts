import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeAllegationOrganizationLengthInCaseSyncTable1642485761154 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
