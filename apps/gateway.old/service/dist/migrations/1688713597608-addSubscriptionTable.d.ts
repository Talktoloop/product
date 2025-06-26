import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addSubscriptionTable1688713597608 implements MigrationInterface {
    tableName1: string;
    tableName2: string;
    foreignKeyUserId: string;
    indexUserId: string;
    foreignKeyOrganisationId: string;
    indexOrganisationId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
