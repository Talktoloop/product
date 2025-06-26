import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddDifficultyToStoryTable1622662942357 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
