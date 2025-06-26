import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddConversationTable1618602342544 implements MigrationInterface {
    private tableName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
