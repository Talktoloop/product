import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddOrderToThematicAreaTable1653301403780 implements MigrationInterface {
    tableName: string;
    private newColumn;
    private order;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
