import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddOriginalLanguageIdToStory1611843248330 implements MigrationInterface {
    private tableName;
    private foreignKeyName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
