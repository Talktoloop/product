import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class addIvrrTypeToChannelStoryColumn1642765184865 implements MigrationInterface {
    private ivrrTableName;
    private callTableName;
    private foreignKeyIvrrConversation;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
