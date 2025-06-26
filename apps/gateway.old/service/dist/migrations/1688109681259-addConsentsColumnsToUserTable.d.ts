import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class AddConsentsColumnsToUserTable1688109681259 implements MigrationInterface {
    tableName: string;
    columns: TableColumn[];
    indexTermsOfServiceId: string;
    foreignKeyTermsOfServiceId: string;
    indexCommunityGuidelinesId: string;
    foreignKeyCommunityGuidelinesId: string;
    indexPrivacyPolicyId: string;
    foreignKeyPrivacyPolicyId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
