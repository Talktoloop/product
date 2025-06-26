import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUniqueKeyForLanguageIdAndCommentId1611918985726 implements MigrationInterface {
    private tableName;
    private index;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
