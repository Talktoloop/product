import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddAgeAndDisablityToMessengerConversationTable1655992701646 implements MigrationInterface {
    tableName: string;
    private newColumns;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
