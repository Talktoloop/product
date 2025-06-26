import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddConversationIdToStoryTable1618857537706 implements MigrationInterface {
    private tableName;
    private foreignKeyConversationId;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
