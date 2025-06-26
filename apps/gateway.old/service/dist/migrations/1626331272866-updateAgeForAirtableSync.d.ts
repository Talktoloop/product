import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateAgeForAirTableSync1626331272866 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
