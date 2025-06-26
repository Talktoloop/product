import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUnknownCountryToCountryTable1665137969221 implements MigrationInterface {
    tableName: string;
    code: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
