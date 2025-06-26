import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddDifficultyValues1731877489628 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
