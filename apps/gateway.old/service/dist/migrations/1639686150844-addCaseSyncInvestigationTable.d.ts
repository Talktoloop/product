import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCaseSyncInvestigationTable1639686150844 implements MigrationInterface {
    private tableName;
    private foreignKeyUserId;
    private columns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
