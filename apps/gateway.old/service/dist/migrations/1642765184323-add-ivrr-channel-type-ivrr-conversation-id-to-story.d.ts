import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addIvrrTypeToChannelStoryColumn1642765184323 implements MigrationInterface {
    private tableName;
    private oldChannelColumn;
    private newChannelColumn;
    private foreignKey;
    private ivrrConversationColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
