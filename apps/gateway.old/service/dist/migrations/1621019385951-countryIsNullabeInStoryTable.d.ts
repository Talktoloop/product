import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class countryIsNullabeInStoryTable1621019385951 implements MigrationInterface {
    private tableName;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
