import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class fixCodesInThematicAreaTable1653337573208 implements MigrationInterface {
    tableName: string;
    newCode: string[];
    oldCode: string[];
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
