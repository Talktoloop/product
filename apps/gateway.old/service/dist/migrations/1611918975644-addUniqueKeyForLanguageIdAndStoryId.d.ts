import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUniqueKeyForLanguageIdAndStoryId1611918975644 implements MigrationInterface {
    private tableName;
    private index;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
