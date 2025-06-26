import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddLoopOnboardingToThematicTable1675676220422 implements MigrationInterface {
    tableName: string;
    newCategory: string;
    newSubcategory: string;
    getLastItem(queryRunner: QueryRunner): Promise<{
        order: number;
        id: number;
    }>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
