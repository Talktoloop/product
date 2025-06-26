import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemoveColumnTitleFromStoryTable1611642295025 implements MigrationInterface {
    private tableName;
    private column;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
