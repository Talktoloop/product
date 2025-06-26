import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddThematicAreaOption1681207096528 implements MigrationInterface {
    tableName: string;
    newSubcategoryCode: string;
    previousSubcategoryCode: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
