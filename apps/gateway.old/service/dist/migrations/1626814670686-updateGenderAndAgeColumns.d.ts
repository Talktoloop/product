import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateGenderAndAgeColumns1626814670686 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
