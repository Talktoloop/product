import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CodeInsteadOfTitleInRejectReasonTable1612173980475 implements MigrationInterface {
    private rejectReasons;
    private tableName;
    private newColumn;
    private oldColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
