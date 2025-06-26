import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CodeInsteadOfTitleInPregnancyStatusTable1612173607807 implements MigrationInterface {
    private statuses;
    private tableName;
    private newColumn;
    private oldColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
