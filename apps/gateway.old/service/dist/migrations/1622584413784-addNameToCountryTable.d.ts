import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddNameToCountryTable1622584413784 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
