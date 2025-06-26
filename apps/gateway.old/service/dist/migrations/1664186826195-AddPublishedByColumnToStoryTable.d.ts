import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddPublishedByColumnToStoryTable1664186826195 implements MigrationInterface {
    private tableName;
    private newColumnNickname;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
