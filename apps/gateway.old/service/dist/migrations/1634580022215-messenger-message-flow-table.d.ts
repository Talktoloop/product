import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class messengerFlowMessageTable1634580022215 implements MigrationInterface {
    private tableName;
    private foreignKeyMessengerConversation;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
