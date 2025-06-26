import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserIdToCommentVote1600237648021 implements MigrationInterface {
    private tableName;
    private newColumn;
    private indexUserName;
    private fkUserName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
