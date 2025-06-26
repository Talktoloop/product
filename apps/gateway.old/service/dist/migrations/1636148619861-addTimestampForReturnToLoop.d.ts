import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTimestampForReturnToLoop1636148619861 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
