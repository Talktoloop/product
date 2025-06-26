import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTableRejectReasonsAndPutData1599652560190 implements MigrationInterface {
    private tableName;
    private listOfRejectReasons;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
