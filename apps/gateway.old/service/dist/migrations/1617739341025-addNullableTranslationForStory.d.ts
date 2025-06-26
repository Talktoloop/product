import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddNullableTranslationForStory1617739341025 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
