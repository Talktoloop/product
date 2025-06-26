import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddIsMinorityByModeratorToStoryRecipient1731511927160 implements MigrationInterface {
    private tableName;
    private newColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
