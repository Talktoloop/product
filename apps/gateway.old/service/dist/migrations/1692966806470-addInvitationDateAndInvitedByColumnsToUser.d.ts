import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class addInvitationDateAndInvitedByColumnsToUser1692966806470 implements MigrationInterface {
    tableName: string;
    foreignKeyInvitedBy: string;
    columns: TableColumn[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
