import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddStoryRecipientTable1676282567016 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
