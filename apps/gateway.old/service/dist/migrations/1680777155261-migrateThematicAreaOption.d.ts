import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class migrateThematicAreaOption1680777155261 implements MigrationInterface {
    tableName: string;
    oldSubcategoryCode: string;
    nextSubcategoryCode: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
