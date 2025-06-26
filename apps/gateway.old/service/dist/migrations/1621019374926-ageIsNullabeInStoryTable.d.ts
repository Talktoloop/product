import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AgeIsNullableInStoryTable1621019374926 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
