import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddStoryCommentRecipientTable1676546827589 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
