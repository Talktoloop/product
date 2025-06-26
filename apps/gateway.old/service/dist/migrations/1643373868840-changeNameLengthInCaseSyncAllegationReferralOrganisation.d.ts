import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeNameLengthInCaseSyncAllegationReferralOrganisation1643373868840 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
