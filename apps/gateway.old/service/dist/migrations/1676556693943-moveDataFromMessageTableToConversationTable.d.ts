import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export declare class MoveDataFromMessageTableToConversationTable1676556693943 implements MigrationInterface {
    table: string;
    column: TableColumn;
    columns: TableColumn[];
    foreignKeyLanguageId: string;
    foreignKeyStoryId: string;
    foreignKeyCountryId: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
