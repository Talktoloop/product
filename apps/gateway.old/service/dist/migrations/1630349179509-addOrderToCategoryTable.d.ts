import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addOrderToCategoryTable1630349179509 implements MigrationInterface {
    private tableName;
    private newColumn;
    private order;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
