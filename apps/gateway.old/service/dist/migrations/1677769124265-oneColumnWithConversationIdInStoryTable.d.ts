import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class OneColumnWithConversationIdInStoryTable1677769124265 implements MigrationInterface {
    table: string;
    foreignKeyStoryToIvrrConversation: string;
    foreignKeyStoryToMessengerConversation: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
