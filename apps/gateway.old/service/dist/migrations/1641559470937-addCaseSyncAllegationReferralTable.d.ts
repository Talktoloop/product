import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCaseSyncAllegationReferralTable1641559470937 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    private columns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
