import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTranslationStatusToStory1616874622637 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
