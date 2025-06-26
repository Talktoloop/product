import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateDefaultValueForStoryAge1599555935648 implements MigrationInterface {
    private tableName;
    private columName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
