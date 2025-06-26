import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserIdToStoryVote1600237632715 implements MigrationInterface {
    private tableName;
    private newColumn;
    private indexUserName;
    private fkUserName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
