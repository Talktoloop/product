import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddOrganisationsStarterList1594666949065 implements MigrationInterface {
    private tableName;
    private listOfOrganisation;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
