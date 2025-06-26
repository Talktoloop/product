import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AWSInsteadOfGoogleforTagalog1668510628937 implements MigrationInterface {
    tableName: string;
    columnName: string;
    newProvider: string;
    oldProvider: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
