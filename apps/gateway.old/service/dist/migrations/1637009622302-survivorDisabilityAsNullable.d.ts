import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SurvivorDisabilityAsNullable1637009622302 implements MigrationInterface {
    private tableName;
    private columName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
