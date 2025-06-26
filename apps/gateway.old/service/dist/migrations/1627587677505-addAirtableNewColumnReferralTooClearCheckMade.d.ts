import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddAirtableNewColumnReferralTooClearCheckMade1627587677505 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
