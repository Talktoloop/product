import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddCategryStartedList1594322931137 implements MigrationInterface {
    private tableName;
    private listOfCategories;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
