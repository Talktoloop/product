import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class FixTypoInConversationTableName1693287102480 implements MigrationInterface {
    oldTableName: string;
    newTableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
