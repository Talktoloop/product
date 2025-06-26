import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class SetNullableContentForStoryHistoricalTranslation1668776504452 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
