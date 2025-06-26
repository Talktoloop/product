import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddAirtableNewColumnCaseAccountability1627938241688 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
