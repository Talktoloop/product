import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class messengerConversationTable1634580022213 implements MigrationInterface {
    private tableName;
    private foreignKeyLanguageId;
    private foreignKeyCountryId;
    private foreignKeyStoryId;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
