import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addExportCsvActivityTable1689839043332 implements MigrationInterface {
    tableName: string;
    foreignKeyUserId: string;
    indexUserId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
