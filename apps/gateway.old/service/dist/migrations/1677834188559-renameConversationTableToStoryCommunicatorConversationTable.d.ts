import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenameConversationTableToStoryCommunicatorConversationTable1677834188559 implements MigrationInterface {
    oldTableName: string;
    newTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
