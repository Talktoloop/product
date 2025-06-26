import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableCaseManager1621108007003 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
