import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class FixStoryChannelAndPageId1645020690596 implements MigrationInterface {
    storyTableName: string;
    conversationTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
