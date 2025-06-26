import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class googleInsteadOfAwsforTagalog1676909416367 implements MigrationInterface {
    tableName: string;
    columnName: string;
    newProvider: string;
    oldProvider: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
