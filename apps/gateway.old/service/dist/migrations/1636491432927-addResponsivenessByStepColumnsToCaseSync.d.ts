import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddResponsivenessByStepColumnsToCaseSync1636491432927 implements MigrationInterface {
    private tableName;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
