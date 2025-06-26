import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class messengerConversation1634580022214 implements MigrationInterface {
    private tableName;
    private foreignKey;
    private messengerConversationColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
