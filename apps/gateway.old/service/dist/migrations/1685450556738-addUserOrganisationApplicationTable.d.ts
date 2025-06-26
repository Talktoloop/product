import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserOrganisationApplicationTable1685450556738 implements MigrationInterface {
    tableName: string;
    foreignKeyUserId: string;
    indexUserId: string;
    foreignKeyOrganisationId: string;
    indexOrganisationId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
