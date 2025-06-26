import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTableDifficulty1594330526444 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
