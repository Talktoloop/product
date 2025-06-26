import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class ChangeColumnPublishedByToStatusChangedByInStoryTable1676900016296 implements MigrationInterface {
    tableName: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
