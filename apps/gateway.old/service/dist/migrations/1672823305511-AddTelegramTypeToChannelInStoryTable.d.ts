import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTelegramTypeToChannelInStoryTable1672823305511 implements MigrationInterface {
    private tableName;
    private oldChannelColumn;
    private newChannelColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
