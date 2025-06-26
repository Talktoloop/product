import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddOtherOptionToDifficultyTable1626117734248 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
