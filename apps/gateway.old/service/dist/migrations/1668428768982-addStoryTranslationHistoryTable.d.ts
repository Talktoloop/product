import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddStoryTranslationHistoryTable1668428768982 implements MigrationInterface {
    private tableName;
    private foreignKeyStoryTranslationId;
    private foreignKeyUserId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
