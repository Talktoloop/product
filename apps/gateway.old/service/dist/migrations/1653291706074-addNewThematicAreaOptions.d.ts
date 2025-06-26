import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddNewThematicAreaOptions1653291706074 implements MigrationInterface {
    tableName: string;
    options: string[];
    addCategory(queryRunner: QueryRunner, categoryIds: Record<string, number>, categoryCode: string): Promise<Record<string, number>>;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
