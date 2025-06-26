import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIsUrgentToStoryTable1668776154324 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
