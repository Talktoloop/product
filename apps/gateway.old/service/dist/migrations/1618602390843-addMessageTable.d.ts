import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddMessageTable1618602390843 implements MigrationInterface {
    private tableName;
    private foreignKeyLanguageId;
    private foreignKeyStoryId;
    private foreignKeyConversationId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
