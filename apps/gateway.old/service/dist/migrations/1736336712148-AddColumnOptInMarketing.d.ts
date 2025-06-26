import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddColumnOptInMarketing1736336712148 implements MigrationInterface {
    private tableName;
    private columnName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
