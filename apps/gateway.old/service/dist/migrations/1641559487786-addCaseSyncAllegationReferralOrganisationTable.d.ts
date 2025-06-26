import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCaseSyncAllegationReferralOrganisationTable1641559487786 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    private organisationAllegationColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
