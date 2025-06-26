import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ivrrConversationEntity1642534272198 implements MigrationInterface {
    private tableName;
    private foreignKeyLanguageId;
    private foreignKeyStoryId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
