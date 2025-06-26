import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveDataFromIVrrConversationTableToConversationTable1677661851103 implements MigrationInterface {
    table: string;
    columns: TableColumn[];
    foreignKeyMessageToIvrrConversation: string;
    foreignKeyMessageToConversation: string;
    foreignKeyStoryToIvrrConversation: string;
    foreignKeyConversationToStory: string;
    foreignKeyStoryToConversation: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
