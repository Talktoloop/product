import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddChannelTypeToStory1614202709712 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
