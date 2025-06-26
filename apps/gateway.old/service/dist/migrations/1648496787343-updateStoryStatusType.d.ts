import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateStoryStatusType1648496787343 implements MigrationInterface {
    private tableName;
    private columnName;
    private oldStoryData;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
