import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMinorityGroupToThematicTable1675673599023 implements MigrationInterface {
    tableName: string;
    thematicCategory: string;
    newSubcategory: string;
    nextSubcategory: string;
    getCategory(queryRunner: QueryRunner): Promise<{
        id: number;
    }>;
    getSubcategory(queryRunner: QueryRunner, categoryId: number, name: string): Promise<{
        id: number;
        order: number;
    }>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
