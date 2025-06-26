import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class MoveUserDataFromMessageTableToStoryRecipient1676542638378 implements MigrationInterface {
    table: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
