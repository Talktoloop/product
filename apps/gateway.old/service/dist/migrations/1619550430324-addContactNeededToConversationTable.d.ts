import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddContactNeededToConversationTable1619550430324 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
