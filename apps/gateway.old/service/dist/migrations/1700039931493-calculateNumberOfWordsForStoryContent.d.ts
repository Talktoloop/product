import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CalculateNumberOfWordsForStoryContent1700039931493 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
