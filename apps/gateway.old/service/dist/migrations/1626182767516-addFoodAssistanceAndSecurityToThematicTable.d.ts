import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddFoodAssistanceAndSecurityToThematicTable1626182767516 implements MigrationInterface {
    private tableName;
    private items;
    getParents(queryRunner: QueryRunner): Promise<{
        id: number;
        code: string;
    }[]>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
